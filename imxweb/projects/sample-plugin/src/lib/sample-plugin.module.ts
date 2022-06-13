import { NgModule } from '@angular/core';
import { SamplePluginComponent } from './sample-plugin.component';
import { Routes } from '@angular/router';

import { TileModule } from 'qbm';
import { SamplePluginMessageComponent } from './sample-plugin-message/sample-plugin-message.component';
import { SamplePluginService } from './sample-plugin.service';

const routes: Routes = [];

@NgModule({
  declarations: [
    SamplePluginComponent, SamplePluginMessageComponent,
  ],
  imports: [
    TileModule
  ],
  exports: [
    TileModule,
    SamplePluginComponent
  ]
})
export class SamplePluginModule {
  constructor(private readonly initializer: SamplePluginService) {

      console.log('In constructor of SamplePluginModule: Message of the Day Loaded');
      this.initializer.onInit(routes);
      console.log('Message of the Day initialized');
    }

 }
