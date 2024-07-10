import { NgModule } from '@angular/core';
import { UtilsPluginComponent } from './utils-plugin.component';
import { UtilsPluginService } from './utils-plugin.service';
import { DataSourceToolbarModule, DataTableModule, TileModule } from "qbm";
import { UtilsPluginScriptComponent } from './utils-plugin-script/utils-plugin-script.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
//import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    declarations: [
        UtilsPluginComponent,
        UtilsPluginScriptComponent
    ],
    exports: [
      UtilsPluginComponent
    ],
    imports: [
        TileModule,
       //BrowserModule,
        CommonModule,
        FormsModule ,
        MatInputModule,
        MatButtonModule,
        MatTableModule,
        DataSourceToolbarModule,
        DataTableModule
    ]
})
export class UtilsPluginModule {
  constructor(private readonly initializer: UtilsPluginService) {
        console.log('In constructor of UtilsPluginModule.');
        this.initializer.onInit();
        console.log('UtilsPluginModule initialized');
    }
}
