import { OverlayRef } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { EuiLoadingService } from '@elemental-ui/core';
import { OwnershipInformation } from 'imx-api-qer';
import { CollectionLoadParameters, EntityData, EntitySchema, HierarchyData, IEntity, TypedEntityBuilder, ValType } from 'imx-qbm-dbts';
import { ExtService, SettingsService, TreeDatabase, TreeNodeResultParameter } from 'qbm';
import { RoleService } from 'qer';
import { SamplePluginComponent } from './sample-plugin.component';

@Injectable({
  providedIn: 'root'
})
export class SamplePluginService  {

  sampleMessage: string
  tableName: string = "Department"

  constructor(
    private readonly extService: ExtService,
    private readonly router: Router
  ) {
   }

  public onInit(routes: Route[]): void{
    this.addRoutes(routes);
    this.extService.register('Dashboard-SmallTiles', {instance: SamplePluginComponent})
  }

  addRoutes(routes: Route[]) {
    const config = this.router.config;
    routes.forEach(route => {
      config.unshift(route);
    });
    this.router.resetConfig(config);
  }


}
