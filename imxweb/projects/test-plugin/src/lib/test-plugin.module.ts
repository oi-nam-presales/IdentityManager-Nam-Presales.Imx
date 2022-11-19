import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { TestPluginComponent } from './test-plugin.component';
import {TestPluginService} from './test-plugin.service';
import {TileModule} from 'qbm';
const routes: Routes = []

// const routes: Routes = [
//   {
//     path: 'testplugin',
//     component: SimpleUiComponent
//   }
// ];

@NgModule({
  declarations: [
    TestPluginComponent
  ],
  imports: [
    TileModule
  ],
  exports: [
    TestPluginComponent
  ]
})
export class TestPluginModule {

  constructor(private readonly initializer: TestPluginService) {
    console.log('In constructor of TestPluginModule: Message of the Day Loaded');

    this.initializer.onInit(routes);

    console.log('TestPluginModule Module initialized');
}

}
