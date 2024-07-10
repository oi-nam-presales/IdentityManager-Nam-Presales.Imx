import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AppConfigService, ExtService, ImxTranslationProviderService } from 'qbm';
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
    private readonly translationProvider: ImxTranslationProviderService
  ) {
    const schemaProvider = appConfig.client;
    this.v2Client = new V2Client(appConfig.apiClient, schemaProvider);
    this.typedClient = new TypedClient(this.v2Client, this.translationProvider);
   }

  public onInit(): void{
    this.extService.register('Dashboard-SmallTiles', {instance: UtilsPluginComponent})
  }

  addRoutes(routes: Route[]) {
    const config = this.router.config;
    routes.forEach(route => {
      config.unshift(route);
    });
    this.router.resetConfig(config);
  }

  async userGetAIResponse(userRequest): Promise<any> {
    try{

      const args: any = {
          request: encodeURIComponent(userRequest)
      }

      var data = await this.v2Client.portal_imutils_ai_get(args)

      return data;
    }catch(e) {
      console.error(e);
    }
  }

}
