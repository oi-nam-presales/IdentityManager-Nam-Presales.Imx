import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserGroupInfo } from 'imx-api-qbm';
import { UserConfig } from 'imx-api-qer';
import { V2Client, TypedClient } from 'imx-api-demoplugin';
import { ApiClient, CollectionLoadParameters, CompareOperator, ExtendedTypedEntityCollection, FilterData, FilterType, TypedEntity, TypedEntityCollectionData } from 'imx-qbm-dbts';
import { AppConfigService, ClassloggerService, ExtService, ImxTranslationProviderService, imx_SessionService, ISessionState } from 'qbm';
import { RoleService, UserModelService } from 'qer';
import { SamplePluginDemoComponent } from './sample-plugin-demo.component';

@Injectable({
  providedIn: 'root'
})
export class SamplePluginDemoService {

  session: ISessionState;
  userConfig: UserConfig;

  userGroupInfo: UserGroupInfo[];

  private v2Client: V2Client;
  private tc: TypedClient;
  public get testV2CClient(): V2Client {
    return this.v2Client;
  }

  public get apiClient(): ApiClient {
    return this.appConfig.apiClient;
  }

  constructor(
    private readonly extService: ExtService,
    private readonly router: Router,
    public readonly sessionService: imx_SessionService,
    public readonly userModelSvc: UserModelService,
    private readonly roleService: RoleService,
    private readonly appConfig: AppConfigService,
    private readonly logger: ClassloggerService,
    private readonly translationProvider: ImxTranslationProviderService
  ) {
    try {
      this.logger.debug(this, 'Initializing QER sample-demo-plugin service');

      // Use schema loaded by QBM client
      const schemaProvider = appConfig.client;
      this.v2Client = new V2Client(appConfig.apiClient, schemaProvider);
      this.tc = new TypedClient(this.v2Client, this.translationProvider);
    } catch (e) {
      this.logger.error(this, e);
    }
  }

  async onInit(routes: Route[]) {
    this.addRoutes(routes);
    this.extService.register('Dashboard-SmallTiles', {instance: SamplePluginDemoComponent})

    //const schemaProvider = this.appConfig.client;
    //this.testClient = new V2Client(this.appConfig.apiClient, schemaProvider);

    this.session = await this.sessionService.getSessionState()
    this.userConfig = await this.userModelSvc.getUserConfig()
    //this.userGroupInfo = await this.userModelSvc.getGroups()
  }

  addRoutes(routes: Route[]) {
    const config = this.router.config;
    routes.forEach(route => {
      config.unshift(route);
    });
    this.router.resetConfig(config);
  }

  async getUserName():Promise<string>{
    this.session = await this.sessionService.getSessionState()
    return this.session.Username
  }

  buildFilter(column: string, value: string): FilterData {
    return {
      CompareOp: CompareOperator.Equal,
      Type: FilterType.Compare,
      ColumnName: column,
      Value1: value
    };
  }

  async userGroups(): Promise<UserGroupInfo[]> {
    return this.userModelSvc.getGroups();
  }

  userGetReportRoles(): Promise<any> {
    //this.sessionService.ge
    //try{
      //var y = this.tc.PortalDemopluginSql.Get(365);
      //var x = this.v2Client.portal_demoplugin_get({}); //portal_demoplugin_getreportsroles_get("ben.erdman");
      var x = this.v2Client.portal_demoplugin_sql_get(365);
      return x;
    //}catch(e) {
    //  this.logger.error(this, e);
    //}
  }

  async getUserRoles():Promise<TypedEntity[]>{

    const parameter: CollectionLoadParameters = { ParentKey: '' /* first level */ }

    const navigationState = {

      ...{
        PageSize: 20,
        StartIndex: 0
      }
    };

    //const data = await this.roleService.getEntitiesForTree("Org", navigationState);

    this.session = await this.sessionService.getSessionState()

    const data = await this.roleService.getMemberships("AERole", this.session.UserUid, navigationState); //this.session.UserUid, navigationState)

    return data.Data

    //this.testClient.portal_candidates_PersonInAERole_get({this.buildFilter("UID_Person",this.session.UserUid)})
  }
}
