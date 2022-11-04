import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ExtService, ISessionState } from 'qbm';
import { TestPluginComponent } from './test-plugin.component';

@Injectable({
  providedIn: 'root'
})
export class TestPluginService {

  session: ISessionState;

  constructor(
    private readonly extService: ExtService,
    private readonly router: Router
  ) { }

  async onInit(routes: Route[]) {
    this.extService.register('Dashboard-SmallTiles', {instance: TestPluginComponent})

  }
}
