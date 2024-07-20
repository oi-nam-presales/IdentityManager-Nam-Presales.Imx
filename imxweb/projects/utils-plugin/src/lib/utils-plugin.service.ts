import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AppConfigService, ExtService,  ImxTranslationProviderService } from 'qbm';
import { UtilsPluginComponent } from './utils-plugin.component';
import { V2Client, TypedClient } from 'imx-api-utilsplugin';

@Injectable({
  providedIn: 'root'
})
export class UtilsPluginService {

  private v2Client: V2Client;
  private typedClient: TypedClient;


  constructor(
    private readonly extService: ExtService,
    private readonly router: Router,
    private readonly appConfig: AppConfigService,
    private readonly translationProvider: ImxTranslationProviderService,
  ) {
    const schemaProvider = appConfig.client;
    this.v2Client = new V2Client(appConfig.apiClient, schemaProvider);
    this.typedClient = new TypedClient(this.v2Client, this.translationProvider);
   }

  public async onInit(): Promise<void>{
    this.extService.register('Dashboard-SmallTiles', {instance: UtilsPluginComponent});
  }

  addRoutes(routes: Route[]) {
    const config = this.router.config;
    routes.forEach(route => {
      config.unshift(route);
    });
    this.router.resetConfig(config);
  }

  userHasRole(uidPerson): Promise<boolean> {
    try{

      var data =  this.v2Client.portal_imutils_ai_hasaiuserrole_get(uidPerson)

      return data;
    }catch(e) {
      console.error(e);
    }
  }

  async userGetAIResponse(userRequest, history): Promise<any> {
    try{

      const args: any = {
          request: encodeURIComponent(userRequest)
      }

      var data = await this.v2Client.portal_imutils_ai_conversation_post(history, args)

      return data;
    }catch(e) {
      console.error(e);
    }
  }

}
