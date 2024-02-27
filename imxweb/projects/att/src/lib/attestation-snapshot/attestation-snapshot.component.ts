
/*
 * ONE IDENTITY LLC. PROPRIETARY INFORMATION
 *
 * This software is confidential.  One Identity, LLC. or one of its affiliates or
 * subsidiaries, has supplied this software to you under terms of a
 * license agreement, nondisclosure agreement or both.
 *
 * You may not copy, disclose, or use this software except in accordance with
 * those terms.
 *
 *
 * Copyright 2023 One Identity LLC.
 * ALL RIGHTS RESERVED.
 *
 * ONE IDENTITY LLC. MAKES NO REPRESENTATIONS OR
 * WARRANTIES ABOUT THE SUITABILITY OF THE SOFTWARE,
 * EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
 * TO THE IMPLIED WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE, OR
 * NON-INFRINGEMENT.  ONE IDENTITY LLC. SHALL NOT BE
 * LIABLE FOR ANY DAMAGES SUFFERED BY LICENSEE
 * AS A RESULT OF USING, MODIFYING OR DISTRIBUTING
 * THIS SOFTWARE OR ITS DERIVATIVES.
 *
 */

import { Component, Input, OnInit } from '@angular/core';
import { EuiLoadingService, EuiSidesheetConfig, EuiSidesheetService } from '@elemental-ui/core';

import { AttestationSnapshotData } from 'imx-api-att';
import { ApiService } from '../api.service';
import { SapModsApiService } from '../sapmods-api.service';
import { EntitySchema, IClientProperty } from 'imx-qbm-dbts';
import { DataSourceToolbarSettings, imx_SessionService } from 'qbm';
import { SAPRoleAuthorizationComponent } from './saprole-authorization/saprole-authorization.component';

// --> =======================================================================





// --> ========================================================================
@Component({
  templateUrl: './attestation-snapshot.component.html',
  selector: 'imx-attestation-snapshot',
  styleUrls: ['./attestation-snapshot.component.scss'],  
})
export class AttestationSnapshotComponent  implements OnInit {
  standalone: true
  public snapshot: AttestationSnapshotData;

  //displayedColumns = ['RoleName', 'ProfileName', 'AuthObjectDescription', 'SAPFieldName', 'Value', 'SAPFieldDescription'];
  public displayedColumns: IClientProperty[];
  public dstSettings: DataSourceToolbarSettings;
  public entitySchema : EntitySchema;

  public dataSource: any; //SAPRole data
  public dataSourceString: any
  public SAPRoleID: string;
  public sapRoleName: string;

  // myJsonString: string
  // groupingColumn = "RoleName"
  // reducedGroups = [];
  // initialData: any [];


  @Input() public uidCase: string;
  @Input() public date :string;
  constructor(
    private readonly attApi: ApiService,
    //private readonly sapModApi: SapModsApiService,
    private readonly busy: EuiLoadingService,
    public readonly sessionService: imx_SessionService,
    private readonly sidesheetService: EuiSidesheetService,
  ) {}

  public async ngOnInit(): Promise<void> {
    const overlay = this.busy.show();
    try {
      this.snapshot = await this.attApi.client.portal_attestation_snapshot_get(this.uidCase);     
      this.sortObjectsByDisplay();
      //--> ORIGINAL CODE ABOVE ===============================================
           
      this.sapRoleName = this.snapshot.Objects?.find(item => item.TableDisplay === 'SAP role').Data.Display;

      if(this.sapRoleName !== ""){
        // var sapRoleDatas = await this.sapModApi.client.portal_sapmodsplugin_getsaproletransactionsscript_get(this.uidCase);
        // var sapRoleID = await this.sapModApi?.typedClient?.PortalSapmodspluginGetsaproleidbyattcaseid.Get(this.uidCase);      
        // var sapRoleDatas4 = await this.sapModApi.typedClient.PortalSapmodspluginGetsaprolesauthbysaproleidsql.Get(sapRoleID.Data[0].UID_SAPRole.value);
        
        // var SAPRoleID = await this.sapModApi.Get_SAPRoleID_ByAttCase(this.uidCase);
        // this.dataSource = await this.sapModApi.GetRoleAuthorization_BySAPRoleID_Sql(SAPRoleID)
        // this.entitySchema = await this.sapModApi.GetRoleAuthorization_BySAPRoleID_Sql_Schema()
        
        // this.dataSource = await this.sapModApi.GetRoleAuthorization_ByAttCase_Sql(this.uidCase);
        // this.entitySchema = await this.sapModApi.GetRoleAuthorization_ByAttCase_Sql_Schema()
        
        // this.displayedColumns = [
        //   this.entitySchema.Columns.RoleName,
        //   this.entitySchema.Columns.ProfileName,
        //   this.entitySchema.Columns.AuthObjectDescription,
        //   this.entitySchema.Columns.SAPFieldName,
        //   this.entitySchema.Columns.Value,
        //   this.entitySchema.Columns.SAPFieldDescription
        // ];

        // try{
        //   this.dstSettings = {
        //     displayedColumns: this.displayedColumns, //
        //     dataSource: this.dataSource,
        //     entitySchema: this.entitySchema,
        //     navigationState: { PageSize: 5, StartIndex:0 } 
        //   }; 
        // }catch(e){
        //   console.error(e);
        // }
         
      }
                  
      // if(!this.initData(sapRoleDatas)) return; 

      // this.buildDataSource();

    } finally {
      this.busy.hide(overlay);
    }
  }

  public get attestationDate(): string {
    return this.date;
  }

  public async openSAPRoleAuthorization(): Promise<void> {
    
    const title = "SAP Role: '" + this.sapRoleName + "'";

    const config: EuiSidesheetConfig = {
      title: title,
      width: '900px',
      headerColour: 'green',
      data: [this.uidCase, this.sapRoleName]
    };

    const sidesheetRef = this.sidesheetService.open(
      SAPRoleAuthorizationComponent, config
    );
  }


  /**
   * Ordering Objects array by Display (if Displays are equal, then by TableDisplay) in ascending order
   */
  private sortObjectsByDisplay(): void {
    this.snapshot.Objects.sort((obj1, obj2) => {
      const display1 = obj1.Data.Display;
      const display2 = obj2.Data.Display;
      const tableDisplay1 = obj1.TableDisplay;
      const tableDisplay2 = obj2.TableDisplay;

      if (display1 === display2) return tableDisplay1 < tableDisplay2 ? -1 : 1;

      return display1 < display2 ? -1 : 1;
    });
  }

  // --> OROGONAL CODE ABOVE =================================================

  /**
   * Discovers columns in the data
   */
  // initData(data){
  //   if(!data) return false;
  //   //this.displayedColumns = Object.keys(data[0]);
  //   this.initialData = data;
  //   return true;
  // }

  /**
   * Rebuilds the datasource after any change to the criterions
   */
  // buildDataSource(){
  //   this.dataSource = this.groupBy(this.groupingColumn,this.initialData,this.reducedGroups);
  // }

  /**
   * Groups the @param data by distinct values of a @param column
   * This adds group lines to the dataSource
   * @param reducedGroups is used localy to keep track of the colapsed groups
   */
  // groupBy(column:string,data: any[],reducedGroups?: any[]){
  //   if(!column) return data;
  //   let collapsedGroups = reducedGroups;
  //   if(!reducedGroups) collapsedGroups = [];
  //   const customReducer = (accumulator, currentValue) => {
  //     let currentGroup = currentValue[column];
  //     if(!accumulator[currentGroup])
  //     accumulator[currentGroup] = [{
  //       groupName: `${column} ${currentValue[column]}`,
  //       value: currentValue[column], 
  //       isGroup: true,
  //       reduced: collapsedGroups.some((group) => group.value == currentValue[column])
  //     }];
      
  //     accumulator[currentGroup].push(currentValue);

  //     return accumulator;
  //   }
  //   let groups = data.reduce(customReducer,{});
  //   let groupArray = Object.keys(groups).map(key => groups[key]);
  //   let flatList = groupArray.reduce((a,c)=>{return a.concat(c); },[]);

  //   return flatList.filter((rawLine) => {
  //       return rawLine.isGroup || 
  //       collapsedGroups.every((group) => rawLine[column]!=group.value);
  //     });
  // }

  /**
   * Since groups are on the same level as the data, 
   * this function is used by @input(matRowDefWhen)
   */
  // isGroup(index, item): boolean{
  //   return item.isGroup;
  // }

  /**
   * Used in the view to collapse a group
   * Effectively removing it from the displayed datasource
   */
  // reduceGroup(row){
  //   row.reduced=!row.reduced;
  //   if(row.reduced)
  //     this.reducedGroups.push(row);
  //   else
  //     this.reducedGroups = this.reducedGroups.filter((el)=>el.value!=row.value);
    
  //   this.buildDataSource();
  // }
}
