import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserGroupInfo } from 'imx-api-qbm';
import { UserConfig } from 'imx-api-qer';
import { CollectionLoadParameters, ExtendedTypedEntityCollection, TypedEntity, TypedEntityCollectionData } from 'imx-qbm-dbts';
import { ExtService, imx_SessionService, ISessionState } from 'qbm';
import { RoleService, UserModelService } from 'qer';
import { SamplePluginDemoComponent } from './sample-plugin-demo.component';

@Injectable({
  providedIn: 'root'
})
export class SamplePluginDemoService {

  session: ISessionState;
  userConfig: UserConfig;
  userGroupInfo: UserGroupInfo[];
  userRoles: TypedEntity[];

  constructor(
    private readonly extService: ExtService,
    private readonly router: Router,
    public readonly sessionService: imx_SessionService,
    public readonly userModelSvc: UserModelService,
    private readonly roleService: RoleService
  ) { }

  async onInit(routes: Route[]) {
    this.addRoutes(routes);
    this.extService.register('Dashboard-SmallTiles', {instance: SamplePluginDemoComponent})

    this.session = await this.sessionService.getSessionState()
    this.userConfig = await this.userModelSvc.getUserConfig()
    this.userGroupInfo = await this.userModelSvc.getGroups()
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

  // async getUserRoles():Promise<TypedEntity[]>{

  //   const parameter: CollectionLoadParameters = { ParentKey: '' /* first level */ }

  //   const navigationState = {

  //     ...{
  //       PageSize: 20,
  //       StartIndex: 0
  //     }
  //   };

  //   //const data = await this.roleService.getEntitiesForTree("Org", navigationState);

  //   this.session = await this.sessionService.getSessionState()

  //    const data = await this.roleService.getCandidates("AERole", this.session.UserUid, navigationState) //this.session.UserUid, navigationState)
  //    if(data){
  //      this.userRoles = data.Data
  //    }
  //   return this.userRoles
  // }
}
