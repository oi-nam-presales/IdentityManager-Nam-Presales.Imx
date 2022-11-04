import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SamplePluginDemoComponent } from './sample-plugin-demo.component';
import { SamplePluginDemoService } from './sample-plugin-demo.service';

//import {TileModule} from 'qbm';
import { SimpleUiComponent } from './simple-ui/simple-ui.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//----------------------------------------------------------------------
import { MatMenuModule } from '@angular/material/menu';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { EuiCoreModule, EuiMaterialModule } from '@elemental-ui/core';
import { CommonModule } from '@angular/common';

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
} from 'qbm';
import { RoleMembershipsComponent } from 'qer';
import { AssignmentsComponent } from 'qer/lib/identities/identity-sidesheet/assignments/assignments.component';


//const routes: Routes = []
const routes: Routes = [
  {
    path: 'sampleplugindemo',
    component: SimpleUiComponent
  }
];

@NgModule({
  declarations: [
    SamplePluginDemoComponent, SimpleUiComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    TileModule,
    //BrowserModule,
    CdrModule,
    CommonModule,
    EuiCoreModule,
    EuiMaterialModule,
    FormsModule,
    LdsReplaceModule,
    MatMenuModule,
    MatOptionModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    DynamicTabsModule
  ],
  exports: [
    TileModule,
    SamplePluginDemoComponent, SimpleUiComponent
  ]
})
export class SamplePluginDemoModule {
  constructor(private readonly initializer: SamplePluginDemoService) {
        console.log('In constructor of SamplePluginDemoModule: Message of the Day Loaded');

        this.initializer.onInit(routes);

        console.log('Demo Module initialized');
    }
}

