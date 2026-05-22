import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EUI_SIDESHEET_DATA, EuiLoadingService, EuiSidesheetService } from '@elemental-ui/core';
import { PortalAdminPerson } from '@imx-modules/imx-api-qer';
import { CompareOperator, FilterData } from '@imx-modules/imx-qbm-dbts';
import { AuthenticationService, calculateSidesheetWidth } from 'qbm';
import { IdentitySidesheetComponent, ProjectConfigurationService, QerApiService } from 'qer';

@Component({
  selector: 'imx-geo-locality-persons-sidesheet',
  templateUrl: './geo-locality-persons-sidesheet.component.html',
  styleUrls: ['./geo-locality-persons-sidesheet.component.scss'],
  standalone: false,
  host: { 'data-component-id': 'geo-locality-persons-sidesheet' },
})
export class GeoLocalityPersonsSidesheetComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public allPersons: PortalAdminPerson[] = [];
  public dataSource = new MatTableDataSource<PortalAdminPerson>([]);
  public reportUidSet = new Set<string>();
  public directReportUidSet = new Set<string>();
  public loading = true;
  public totalCount = 0;
  public readonly defaultPageSize = 20;
  private currentOrderBy: string | undefined = undefined;
  private reportSortActive = false;
  public displayedColumns = ['FirstName', 'LastName', 'CentralAccount', 'UID_Department', 'IsInActive', 'Report'];

  private projectConfig: any;

  constructor(
    @Inject(EUI_SIDESHEET_DATA) public data: { localityUid: string; localityName: string },
    private readonly qerApiService: QerApiService,
    private readonly sidesheet: EuiSidesheetService,
    private readonly busyService: EuiLoadingService,
    private readonly configService: ProjectConfigurationService,
    private readonly authentication: AuthenticationService,
  ) { }

  public ngAfterViewInit(): void { }

  public async onPageChange(event: PageEvent): Promise<void> {
    if (this.reportSortActive) { return; }
    await this.loadPersons(event.pageIndex * event.pageSize, event.pageSize);
  }

  public async ngOnInit(): Promise<void> {
    await this.loadPersons(0, this.defaultPageSize);

    try {
      const userUid = this.authentication.onSessionResponse.value.UserUid || '';
      const [allReports, directReports] = await Promise.all([
        this.qerApiService.typedClient.PortalPersonReports.Get({ StartIndex: 0, PageSize: 100, uidperson: userUid }),
        this.qerApiService.typedClient.PortalPersonReports.Get({ StartIndex: 0, PageSize: 100, OnlyDirect: true, uidperson: userUid }),
      ]);
      this.reportUidSet = new Set(allReports.Data.map((p) => p.GetEntity().GetKeys()[0]));
      this.directReportUidSet = new Set(directReports.Data.map((p) => p.GetEntity().GetKeys()[0]));
    } catch (error) {
      console.error('[GeoLocalityPersonsSidesheet] Could not load reports (rows will not be clickable):', error);
    }

    this.loading = false;
  }

  private async loadPersons(startIndex: number, pageSize: number): Promise<void> {
    try {
      const filter: FilterData[] = [
        {
          ColumnName: 'UID_Locality',
          CompareOp: CompareOperator.Equal,
          Value1: this.data.localityUid,
        },
      ];
      const result = await this.qerApiService.typedClient.PortalAdminPerson.Get({
        filter,
        withProperties: '-CentralAccount,FirstName,LastName,UID_Department,IsInActive',
        StartIndex: startIndex,
        PageSize: pageSize,
        OrderBy: this.currentOrderBy,
      });
      this.allPersons = result.Data;
      this.dataSource.data = result.Data;
      this.totalCount = result.totalCount;
    } catch (error) {
      console.error('[GeoLocalityPersonsSidesheet] Error loading persons:', error);
    }
  }

  public col(person: PortalAdminPerson, name: string): string {
    try {
      return person.GetEntity().GetColumn(name).GetValue() ?? '';
    } catch {
      return '';
    }
  }

  public colDisplay(person: PortalAdminPerson, name: string): string {
    try {
      return person.GetEntity().GetColumn(name).GetDisplayValue() ?? '';
    } catch {
      return '';
    }
  }

  public isClickable(person: PortalAdminPerson): boolean {
    return this.reportUidSet.has(person.GetEntity().GetKeys()[0]);
  }

  public reportStatus(person: PortalAdminPerson): 'direct' | 'direct-indirect' | 'indirect' | 'none' {
    const uid = person.GetEntity().GetKeys()[0];
    const isDirect = this.directReportUidSet.has(uid);
    const isReport = this.reportUidSet.has(uid);
    if (isDirect && isReport) { return 'direct-indirect'; }
    if (isDirect) { return 'direct'; }
    if (isReport) { return 'indirect'; }
    return 'none';
  }

  public onSortChange(sort: Sort): void {
    if (!sort.direction) {
      this.reportSortActive = false;
      this.currentOrderBy = undefined;
      if (this.paginator) { this.paginator.pageIndex = 0; }
      this.dataSource.paginator = null;
      void this.loadPersons(0, this.defaultPageSize);
      return;
    }
    if (sort.active === 'Report') {
      this.reportSortActive = true;
      void this.sortByReport(sort.direction);
      return;
    }
    this.reportSortActive = false;
    this.currentOrderBy = `${sort.active} ${sort.direction}`;
    if (this.paginator) {
      this.paginator.pageIndex = 0;
    }
    void this.loadPersons(0, this.paginator?.pageSize ?? this.defaultPageSize);
  }

  private async sortByReport(direction: string): Promise<void> {
    try {
      const filter: FilterData[] = [
        { ColumnName: 'UID_Locality', CompareOp: CompareOperator.Equal, Value1: this.data.localityUid },
      ];
      const result = await this.qerApiService.typedClient.PortalAdminPerson.Get({
        filter,
        withProperties: '-CentralAccount,FirstName,LastName,UID_Department,IsInActive',
        StartIndex: 0,
        PageSize: 10000,
      });
      const order = (p: PortalAdminPerson): number => {
        const s = this.reportStatus(p);
        if (s === 'direct' || s === 'direct-indirect') { return 0; }
        if (s === 'indirect') { return 1; }
        return 2;
      };
      const sorted = [...result.Data].sort((a, b) => {
        const diff = order(a) - order(b);
        return direction === 'desc' ? -diff : diff;
      });
      this.allPersons = sorted;
      this.dataSource.data = sorted;
      this.totalCount = result.totalCount;
      if (this.paginator) {
        this.paginator.pageIndex = 0;
        this.dataSource.paginator = this.paginator;
      }
    } catch (error) {
      console.error('[GeoLocalityPersonsSidesheet] Error sorting by report:', error);
    }
  }

  public async onPersonRowClick(person: PortalAdminPerson): Promise<void> {
    if (!this.isClickable(person)) {
      return;
    }

    const uid = person.GetEntity().GetKeys()[0];
    const overlayRef = this.busyService.show();
    try {
      if (!this.projectConfig) {
        this.projectConfig = await this.configService.getConfig();
      }
      const personCollection = await this.qerApiService.typedClient.PortalPersonReportsInteractive.Get_byid(uid);
      const selectedIdentity = personCollection?.Data?.[0];
      if (!selectedIdentity) {
        return;
      }

      await this.sidesheet
        .open(IdentitySidesheetComponent, {
          title: 'Edit Identity',
          subTitle: selectedIdentity.GetEntity().GetDisplay(),
          padding: '0px',
          disableClose: true,
          width: calculateSidesheetWidth(1100, 0.7),
          icon: 'contactinfo',
          testId: 'geo-plugin-identity-sidesheet',
          data: {
            isAdmin: false,
            projectConfig: this.projectConfig,
            selectedIdentity,
            canEdit: false,
          },
        })
        .afterClosed()
        .toPromise();
    } catch (error) {
      console.error('[GeoLocalityPersonsSidesheet] Error opening identity sidesheet:', error);
    } finally {
      this.busyService.hide(overlayRef);
    }
  }
}
