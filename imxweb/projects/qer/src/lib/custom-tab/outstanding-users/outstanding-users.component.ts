import { Component, OnInit } from '@angular/core';

import { BusyService, ClassloggerService, DataSourceToolbarSettings, DataSourceWrapper, SettingsService } from 'qbm';
import { PersonConfig, PortalPersonAll } from 'imx-api-qer';

import { ProjectConfigurationService } from '../../project-configuration/project-configuration.service';
import { AddressbookDetailComponent } from '../../addressbook/addressbook-detail/addressbook-detail.component';
import { AddressbookService } from '../../addressbook/addressbook.service';
import { CollectionLoadParameters, CompareOperator, FilterData, FilterType } from 'imx-qbm-dbts';
import { OverlayRef } from '@angular/cdk/overlay';
import { EuiLoadingService, EuiSidesheetConfig, EuiSidesheetService } from '@elemental-ui/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'outstandingusers',
  templateUrl: './outstanding-users.component.html',
  styleUrls: ['./outstanding-users.component.scss']
})
export class OutstandingUsersComponent implements OnInit {

  constructor(
    private readonly configService: ProjectConfigurationService,
    private readonly addressbookService: AddressbookService,
    private readonly settingsService: SettingsService,
    private readonly logger: ClassloggerService,
    private readonly euiBusyService: EuiLoadingService,
    private readonly translateService: TranslateService,
    private readonly sidesheet: EuiSidesheetService,
  ) { }

   /**
   * Settings needed by the DataSourceToolbarComponent
   */
   public dstSettings: DataSourceToolbarSettings;

  public busyService = new BusyService();
  private personConfig: PersonConfig;
  private dstWrapper: DataSourceWrapper<PortalPersonAll>;
  private outstandingUsersFilter: FilterData = {
                                                  ColumnName: 'FirstName',
                                                  Type: FilterType.Compare,
                                                  CompareOp: CompareOperator.Like,
                                                  Value1: 'aar%'
                                                }

  public async ngOnInit(): Promise<void> {
    const isBusy = this.busyService.beginBusy();

    try {

      this.personConfig = (await this.configService.getConfig()).PersonConfig;

      this.dstWrapper = await this.addressbookService.createDataSourceWrapper(
        this.personConfig.VI_MyData_WhitePages_ResultAttributes,
        'address-book'
      );

      //This line will replace the existing: this.dstSettings…
      this.dstSettings = await this.dstWrapper.getDstSettings(
        { PageSize: this.settingsService.DefaultPageSize, StartIndex: 0, filter: [this.outstandingUsersFilter]});

    } finally {
      isBusy.endBusy();
    }
  }

  /**
   * Occurs when the navigation state has changed - e.g. users clicks on the next page button.
   */
  public async onNavigationStateChanged(newState: CollectionLoadParameters): Promise<void> {
    const isBusy = this.busyService.beginBusy();
    newState.filter = [this.outstandingUsersFilter];

    try {
      this.dstSettings = await this.dstWrapper.getDstSettings(newState);
    } finally {
      isBusy.endBusy();
    }
  }

  /**
   * Occurs when user selects a person.
   *
   * @param personAll Selected person.
   */
  public async onHighlightedEntityChanged(personAll: PortalPersonAll): Promise<void> {
    this.logger.debug(this, `Selected person changed`);
    this.logger.trace(this, 'New selected person', personAll);

    let overlayRef: OverlayRef;
    setTimeout(() => (overlayRef = this.euiBusyService.show()));

    let config: EuiSidesheetConfig;

    try {
      config = {
        title: await this.translateService.get('#LDS#Heading View Identity Details').toPromise(),
        subTitle: personAll.GetEntity().GetDisplay(),
        padding: '0',
        width: 'max(600px, 60%)',
        testId: 'addressbook-view-identity-details',
        data: await this.addressbookService.getDetail(personAll, this.personConfig.VI_MyData_WhitePages_DetailAttributes),
      };
    } finally {
      setTimeout(() => this.euiBusyService.hide(overlayRef));
    }

    this.sidesheet.open(OutstandingUsersComponent, config);
  }

}
