import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EuiLoadingService, EuiSidesheetService, EUI_SIDESHEET_DATA } from '@elemental-ui/core';
import { TranslateService } from '@ngx-translate/core';
import { OwnershipInformation } from 'imx-api-qer';
import { CollectionLoadParameters, DataModel, DisplayColumns, EntitySchema, IClientProperty, IEntity, TypedEntity, ValType } from 'imx-qbm-dbts';
import { AppConfigService, ClassloggerService, DataSourceToolbarFilter, DataSourceToolbarSettings, ExtService, LdsReplacePipe, MetadataService, SettingsService } from 'qbm';
import { IDataExplorerComponent, RoleService } from 'qer';
import { SamplePluginRolesDataServiceService } from '../sample-plugin.roles-data.service.service';
import { SamplePluginService } from '../sample-plugin.service';

@Component({
  selector: 'imx-sample-plugin-message',
  templateUrl: './sample-plugin-message.component.html',
  styleUrls: ['./sample-plugin-message.component.scss']
})
export class SamplePluginMessageComponent implements OnInit, IDataExplorerComponent {

  sampleMessage: string

  //@Input() public data: OwnershipInformation;
  public dstSettings: DataSourceToolbarSettings;
  public navigationState: CollectionLoadParameters = {};
  public ownershipInfo: OwnershipInformation;
  public entitySchema: EntitySchema;
  public DisplayColumns = DisplayColumns;
  public displayColumns: IClientProperty[];
  public isAdmin = false;
  public useTree = false;
  public ValType = ValType;
  public treeDatabase: SamplePluginRolesDataServiceService;
  public filterOptions: DataSourceToolbarFilter[] = [];

  private dataModel: DataModel;

  constructor(
    @Inject(EUI_SIDESHEET_DATA)
    public data: {
      entity: IEntity;
      isAdmin: boolean;
      ownershipInfo: OwnershipInformation;
      editableFields: string[];
    },
    private readonly sidesheet: EuiSidesheetService,
    private readonly busyService: EuiLoadingService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly appConfig: AppConfigService,
    private readonly settings: SettingsService,
    private readonly logger: ClassloggerService,
    private readonly roleService: RoleService,
    private readonly metadataProvider: MetadataService,
    private readonly translate: TranslateService,
    private readonly ldsReplace: LdsReplacePipe,
    public inintServ: SamplePluginService,
    private readonly extService: ExtService,

  ) {
    this.route.params.subscribe(async (params) => {
      this.ownershipInfo = data.ownershipInfo;
    });
  }


  public async ngOnInit(): Promise<void> {
    this.sampleMessage = this.inintServ.sampleMessage

    /* if (!this.ownershipInfo.TableName || this.ownershipInfo.TableName.length === 0) {
      this.data.ownershipInfo = this.data;
    } */
    try {
      await this.metadataProvider.update([this.ownershipInfo.TableName]);
    } catch (error) {
      this.navigateToStartPage(error);
    }
    const table = this.metadataProvider.tables[this.ownershipInfo.TableName];
    if (!table) {
      this.logger.debug(this, `RolesOverview: Table ${this.ownershipInfo.TableName} does not exists.`);
      this.navigateToStartPage();
      return;
    }

    this.ownershipInfo.TableNameDisplay = table.Display;

    const type = this.roleService.getType(this.ownershipInfo.TableName, true);

    this.treeDatabase = new SamplePluginRolesDataServiceService(this.roleService, this.settings, this.busyService, this.ownershipInfo, type);
    /* await this.treeDatabase.prepare(
      this.roleService.getRoleEntitySchema(this.ownershipInfo.TableName));
    await this.treeDatabase.getData(true); */

    if (!this.roleService.exists(this.ownershipInfo.TableName)) {
      return;
    }
    //this.isAdmin = this.route.snapshot?.url[0]?.path === 'admin';
    this.isAdmin = this.data.isAdmin;

    setTimeout(() => { this.busyService.show(); });
    try {
      //this.useTree = this.isAdmin && (await this.roleService.getEntitiesForTree(this.ownershipInfo.TableName, { PageSize: -1 })).Hierarchy != null;

      this.useTree = (await this.roleService.getEntitiesForTree(this.ownershipInfo.TableName, { PageSize: -1 })).Hierarchy != null;

    } finally {
      setTimeout(() => { this.busyService.hide(); });
    }
    this.navigationState = this.useTree ? {
      // empty string: load first level
      ParentKey: ''
    } : {};
    this.entitySchema = this.roleService.getRoleEntitySchema(this.ownershipInfo.TableName);
    this.displayColumns = [
      this.entitySchema.Columns[DisplayColumns.DISPLAY_PROPERTYNAME],
      {
        ColumnName: 'details',
        Type: ValType.String,
      },
    ];

    setTimeout(() => { this.busyService.show(); });
    try {
      this.dataModel = await this.roleService.getDataModel(this.ownershipInfo.TableName, this.isAdmin)
      this.filterOptions = this.dataModel?.Filters;
    } finally {
      setTimeout(() => { this.busyService.hide(); });
    }
    await this.navigate();

  }

  private async navigateInTree(): Promise<void> {
    await this.treeDatabase.prepare(
    this.roleService.getRoleEntitySchema(this.ownershipInfo.TableName));
    //await this.treeDatabase.getData(true); Not necessary. It is being called by .prepare
  }


  public async onNavigationStateChanged(newState?: CollectionLoadParameters): Promise<void> {
    if (newState) {
      this.navigationState = newState;
    }
    await this.navigate();
  }

  public async onSearch(keywords: string): Promise<void> {
    this.logger.debug(this, `Searching for: ${keywords}`);
    this.navigationState.StartIndex = 0;
    this.navigationState.search = keywords;
    await this.navigate();
  }

  public async showDetails(item: TypedEntity): Promise<void> {
    //await this.openDetails(item.GetEntity());
  }

  public async onNodeSelected(node: IEntity): Promise<void> {
    //await this.openDetails(node);
  }

  private navigateToStartPage(error?: any): void {
    this.logger.error(this, error);
    this.router.navigate([this.appConfig.Config.routeConfig.start], { queryParams: {} });
  }

  /* private async openDetails(item: IEntity): Promise<void> {
    const table = this.metadataProvider.tables[this.ownershipInfo.TableName];

    const sidesheetRef = this.sidesheet.open(RoleDetailComponent, {
      title: this.ldsReplace.transform(await this.translate.get('#LDS#Heading Edit {0}').toPromise(),
        table.DisplaySingular),
      headerColour: 'blue',
      padding: '0px',
      width: 'max(768px, 80%)',
      disableClose: true,
      testId: 'role-detail-sidesheet',
      data: {
        entity: item,
        isAdmin: this.isAdmin,
        ownershipInfo: this.ownershipInfo,
        editableFields: await this.roleService.getEditableFields(this.ownershipInfo.TableName, item),
      },
    });

    sidesheetRef.afterClosed().subscribe(async (result) => {
      await this.navigate();
    });
  } */

  private async navigate(): Promise<void> {
    this.busyService.show();
    try {
      this.useTree ? await this.navigateInTree() : await this.navigateWithTable();
    } finally {
      this.busyService.hide();
    }
  }


  private async navigateWithTable(): Promise<void> {

    this.dstSettings = {
      dataSource: await this.roleService.get(this.ownershipInfo.TableName, this.isAdmin, this.navigationState),
      entitySchema: this.entitySchema,
      navigationState: this.navigationState,
      displayedColumns: this.displayColumns,
      filters: this.filterOptions,
      dataModel: this.dataModel
    };
  }
}
