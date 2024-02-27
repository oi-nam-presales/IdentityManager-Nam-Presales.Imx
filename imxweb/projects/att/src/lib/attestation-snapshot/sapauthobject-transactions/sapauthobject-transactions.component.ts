
//===============================================================
import { Component, Inject, OnInit } from '@angular/core';
import { EuiSidesheetRef, EuiSidesheetService, EUI_SIDESHEET_DATA } from '@elemental-ui/core';
import {SapModsApiService} from '../../sapmods-api.service'
import { Router } from '@angular/router';
import { EntitySchema, IClientProperty } from 'imx-qbm-dbts';
import { DataSourceToolbarSettings} from 'qbm';


@Component({
  selector: 'imx-sapauthobject-transactions',
  templateUrl: './sapauthobject-transactions.component.html',
  styleUrls: ['./sapauthobject-transactions.component.css']
  
})

export class SAPAuthObjectTransactionsComponent implements OnInit {

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
    const uidAuthObject = this.sidesheetdata

    
      this.dataSource = await this.sapModApi.GetTransactions_BySAPAuthObjectID_Sql(uidAuthObject)
      this.entitySchema = await this.sapModApi.GetTransactions_BySAPAuthObjectID_Sql_Schema()
      
      
      this.displayedColumns = [
        this.entitySchema.Columns.TransactionDisplay,
        this.entitySchema.Columns.TransactionDescription      
        
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
