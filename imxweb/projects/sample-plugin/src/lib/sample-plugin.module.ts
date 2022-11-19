import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { SamplePluginComponent } from './sample-plugin.component';
import { Routes } from '@angular/router';

import {
  CdrModule,
  ClassloggerService,
  DataSourceToolbarModule,
  DataTableModule,
  DataTreeWrapperModule,
  DynamicTabsModule,
  FkAdvancedPickerModule,
  LdsReplaceModule,
  MenuService,
  RouteGuardService,
  SqlWizardApiService,
  TileModule
} from '../../../qbm/src/public_api';

import { SamplePluginMessageComponent } from './sample-plugin-message/sample-plugin-message.component';
import { SamplePluginService } from './sample-plugin.service';
import { EuiCoreModule, EuiMaterialModule } from '@elemental-ui/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
//import { RoleMembershipsModule } from 'qer/lib/role-management/role-memberships/role-memberships.module';

const routes: Routes = [];

@NgModule({
  declarations: [
    SamplePluginComponent, SamplePluginMessageComponent,
  ],
  imports: [
    TileModule,
    CommonModule,
    //BrowserModule,
    CdrModule,
    CommonModule,
    EuiCoreModule,
    EuiMaterialModule,
    DataSourceToolbarModule,
    DataTableModule,
    DataTreeWrapperModule,
    FkAdvancedPickerModule,
    FormsModule,
    LdsReplaceModule,
    MatMenuModule,
    MatOptionModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    TranslateModule,
    DynamicTabsModule
  ],
  exports: [
    TileModule,
    SamplePluginComponent
  ]
})
export class SamplePluginModule {

  constructor(private readonly initializer: SamplePluginService) {
  //constructor(private readonly extService: ExtService) {
      console.log('In constructor of SamplePluginModule: Message of the Day Loaded');
      this.initializer.onInit(routes);
      console.log('Message of the Day initialized');
  }
}
