
import { Injectable } from '@angular/core';

import { V2Client, TypedClient } from 'imx-api-saprolesplugin';
import { AppConfigService, ClassloggerService, ImxTranslationProviderService } from 'qbm';

@Injectable({ providedIn: 'root' })
export class SapModsApiService {
  
  private tc: TypedClient;
  public get typedClient(): TypedClient {
    return this.tc;
  }

  private c: V2Client;
  public get client(): V2Client {
    return this.c;
  }


  constructor(
    private readonly config: AppConfigService,
    private readonly logger: ClassloggerService,
    private readonly translationProvider: ImxTranslationProviderService) {
    try {
      this.logger.debug(this, 'Initializing SAPMods service');

      // Use schema loaded by QBM client
      const schemaProvider = config.client;
      this.c = new V2Client(config.apiClient, schemaProvider);
      this.tc = new TypedClient(this.c, this.translationProvider);
    } catch (e) {
      this.logger.error(this, e);
    }
  }

  // this.dataSource = await this.sapModApi.typedClient.PortalSapmodspluginGetsaproleauthbyattcaseidsql.Get(this.uidCase);        
  // this.entitySchema = await this.sapModApi.typedClient.PortalSapmodspluginGetsaproleauthbyattcaseidsql.GetSchema();

  async Get_SAPRoleID_ByAttCase(attcaseid): Promise<any> {    
    try{
      
      var data = await this.tc.PortalSapmodspluginGetsaproleidbyattcaseid.Get(attcaseid);

      return data.Data[0].UID_SAPRole.value

    }catch(e) {
      console.error(e);
    }
  }

  async GetTransactions_BySAPAuthObjectID_Sql(sapAuthObjId): Promise<any> {    
    try{
      
      var data = await this.tc.PortalSapmodspluginGetsaptransbyauthobjidsql.Get(sapAuthObjId);
      return data;
    }catch(e) {
      console.error(e);
    }
  }

  async GetTransactions_BySAPAuthObjectID_Sql_Schema(): Promise<any> {    
    try{
      
      var data = await this.tc.PortalSapmodspluginGetsaptransbyauthobjidsql.GetSchema();
      return data;
    }catch(e) {
      console.error(e);
    }
  }

  //==============================================================================
  async GetRoleAuthorization_BySAPRoleID_Sql(sapRoleId): Promise<any> {    
    try{
      
      var data = await this.tc.PortalSapmodspluginGetsaprolesauthbysaproleidsql.Get(sapRoleId);
      return data;
    }catch(e) {
      console.error(e);
    }
  }

  async GetRoleAuthorization_BySAPRoleID_Sql_Schema(): Promise<any> {    
    try{
      
      var data = await this.tc.PortalSapmodspluginGetsaprolesauthbysaproleidsql.GetSchema();
      return data;
    }catch(e) {
      console.error(e);
    }
  }


  async GetRoleAuthorization_ByAttCase_Sql(attcaseid): Promise<any> {    
    try{
      
      var data = await this.tc.PortalSapmodspluginGetsaproleauthbyattcaseidsql.Get(attcaseid);
      return data;
    }catch(e) {
      console.error(e);
    }
  }

  async GetRoleAuthorization_ByAttCase_Sql_Schema(): Promise<any> {    
    try{
      
      var data = await this.tc.PortalSapmodspluginGetsaproleauthbyattcaseidsql.GetSchema();
      return data;
    }catch(e) {
      console.error(e);
    }
  }

  async userGetReportRolesScript(SapRoleName): Promise<any> {    
    try{
      
      var data = await this.c.portal_sapmodsplugin_getsaproletransactionsscript_get(SapRoleName);
      return data;
    }catch(e) {
      console.error(e);
    }
  }
}
