import { OverlayRef } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { EuiLoadingService } from '@elemental-ui/core';
import { EntitySchemaNew } from 'html/tsb/lib/accounts/account-ext/account-ext-declaration';
import { CollectionLoadParameters, EntitySchema, FilterData, IClientProperty, ValType } from 'imx-qbm-dbts';
import { DataSourceToolbarSettings, imx_SessionService, SettingsService } from 'qbm';
import { UnitePluginService } from '../unite-plugin.service';

@Component({
  selector: 'imx-unite-plugin-sql',
  templateUrl: './unite-plugin-sql.component.html',
  styleUrls: ['./unite-plugin-sql.component.css']
})
export class UnitePluginSqlComponent implements OnInit {

  myDataArray: any;
  public dstSettings: DataSourceToolbarSettings;
  userId: string = "";
  private readonly busy: EuiLoadingService
  displayColumn: any;
  public displayedColumns: IClientProperty[];

  constructor(
    public readonly sessionService: imx_SessionService,
    public unitePluginService: UnitePluginService,
    private readonly settingService: SettingsService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.userId =  (await this.sessionService.getSessionState()).UserUid
    var roles = await this.unitePluginService.userGetReportRolesSQL(this.userId);
    var schema = await this.unitePluginService.userGetReportRolesSQLSchema();
    //---------------------------------------------------------------------------------------    
    this.displayedColumns = [
      { ColumnName: "CentralAccount", IsReadOnly: true, IsValidColumnForFiltering: false, Type: ValType.String },
      { ColumnName: "FirstName", IsReadOnly: true, IsValidColumnForFiltering: false, Type: ValType.String },
      { ColumnName: "LastName", IsReadOnly: true, IsValidColumnForFiltering: false, Type: ValType.String },      
      { ColumnName: "Title", IsReadOnly: true, IsValidColumnForFiltering: false, Type: ValType.String },
      { ColumnName: "Ident_Org", IsReadOnly: true, IsValidColumnForFiltering: false, Type: ValType.String }
    ];
    //----------------------------------------------------------------------------------------   
    
      this.dstSettings = {
        displayedColumns: this.displayedColumns, //schema.Columns,
        dataSource: roles,
        entitySchema: schema,
        navigationState: { PageSize: this.settingService.DefaultPageSize, StartIndex:0 } 
      };    
  }

}
