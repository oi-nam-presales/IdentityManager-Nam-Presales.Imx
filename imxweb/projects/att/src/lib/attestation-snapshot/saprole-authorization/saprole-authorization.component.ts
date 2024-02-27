
//===============================================================
import { Component, Inject, OnInit } from '@angular/core';
import { EuiSidesheetRef, EuiSidesheetService, EUI_SIDESHEET_DATA, EuiSidesheetConfig } from '@elemental-ui/core';
import {SapModsApiService} from '../../sapmods-api.service'
import { Router } from '@angular/router';
import { EntitySchema, IClientProperty, ValType } from 'imx-qbm-dbts';
import { DataSourceToolbarSettings} from 'qbm';
import { SAPAuthObjectTransactionsComponent } from '../sapauthobject-transactions/sapauthobject-transactions.component';
import { PortalSapmodspluginGetsaprolesauthbysaproleidsql } from 'imx-api-saprolesplugin';


@Component({
  selector: 'imx-saprole-authorization',
  templateUrl: './saprole-authorization.component.html',
  styleUrls: ['./saprole-authorization.component.css']
})
export class SAPRoleAuthorizationComponent implements OnInit {

  public displayedColumns: IClientProperty[];
  public dstSettings: DataSourceToolbarSettings;
  public entitySchema : EntitySchema;

  public dataSource: any; //SAPRole data
  public dataSourceString: any
  public SAPRoleID: string;
  public sapRoleName: string;
  

  constructor(
    public readonly router: Router,
    private sidesheetService: EuiSidesheetService,
    private sidesheetRef: EuiSidesheetRef,    
    private readonly sapModApi: SapModsApiService,
    @Inject(EUI_SIDESHEET_DATA) public sidesheetdata?: any
  ) {}


  async ngOnInit(): Promise<void> {
    const uidCase = this.sidesheetdata[0]
    const sapRoleName = this.sidesheetdata[1]

    if(sapRoleName !== ""){
      var SAPRoleID = await this.sapModApi.Get_SAPRoleID_ByAttCase(uidCase);
      this.dataSource = await this.sapModApi.GetRoleAuthorization_BySAPRoleID_Sql(SAPRoleID)
      this.entitySchema = await this.sapModApi.GetRoleAuthorization_BySAPRoleID_Sql_Schema()

      // var authObjectId = 'd8c492a9-dee3-4c4d-a669-d4b20d760612'
      // var test = await this.sapModApi.GetTransactions_BySAPAuthObjectID_Sql(authObjectId)
      
      //--> For generic column
      const col: IClientProperty = {Type: ValType.String, ColumnName: "test" };

      this.displayedColumns = [
        // this.entitySchema.Columns.RoleName,
        this.entitySchema.Columns.ProfileName,
        this.entitySchema.Columns.AuthObjectDescription,
        this.entitySchema.Columns.SAPFieldName,
        // this.entitySchema.Columns.SAPFieldDescription,
        this.entitySchema.Columns.Value,
        col
      ];

      try{
        this.dstSettings = {
          displayedColumns: this.displayedColumns, //
          dataSource: this.dataSource,
          entitySchema: this.entitySchema,
          navigationState: { PageSize: 5, StartIndex:0 } 
        }; 
      }catch(e){
        console.error(e);
      }
    }
  }

  
  public async openTemplates(sapRoleData: PortalSapmodspluginGetsaprolesauthbysaproleidsql): Promise<void> {
    
    const title = "Transactions for : '" + sapRoleData.AuthObject.value + "'";

    const authID = sapRoleData.GetEntity().GetColumn("UID_SAPAuthObject").GetValue();
    
    const config: EuiSidesheetConfig = {
      title: title,
      width: '900px',
      headerColour: 'green',
      data: authID
    };

    const sidesheetRef = this.sidesheetService.open(
      SAPAuthObjectTransactionsComponent, config
    );
  }
}
