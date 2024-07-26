import { NgModule } from '@angular/core';
import { UtilsPluginComponent } from './utils-plugin.component';
import { UtilsPluginService } from './utils-plugin.service';
import { BusyService, DataSourceToolbarModule, DataTableModule, TileModule } from "qbm";
import { UtilsPluginScriptComponent } from './utils-plugin-script/utils-plugin-script.component';
import { MatTableModule } from '@angular/material/table';
import {MatTabsModule, MatTabGroup} from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
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
        CommonModule,
        FormsModule ,
        MatInputModule,
        MatButtonModule,
        MatTableModule,
        MatTabsModule,
        MatExpansionModule,
        DataSourceToolbarModule,
        DataTableModule
    ],
    bootstrap: [UtilsPluginScriptComponent]
})
export class UtilsPluginModule {
  constructor(private readonly initializer: UtilsPluginService) {
        console.log('In constructor of UtilsPluginModule.');
        this.initializer.onInit();
        console.log('UtilsPluginModule initialized');
    }
}
