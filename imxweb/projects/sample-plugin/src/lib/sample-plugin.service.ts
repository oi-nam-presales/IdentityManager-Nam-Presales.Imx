import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ExtService } from 'qbm';
import { SamplePluginComponent } from './sample-plugin.component';

@Injectable({
  providedIn: 'root'
})
export class SamplePluginService {

  sampleMessage: string

  constructor(
    private readonly extService: ExtService,
    private readonly router: Router
  ) { }

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
