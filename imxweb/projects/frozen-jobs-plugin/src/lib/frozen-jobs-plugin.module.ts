import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { EuiCoreModule } from '@elemental-ui/core';

import { TilesModule } from 'qer';
import { FrozenJobDetailDialogComponent } from './frozen-job-detail-dialog/frozen-job-detail-dialog.component';
import { FrozenJobsSidesheetComponent } from './frozen-jobs-sidesheet/frozen-jobs-sidesheet.component';
import { FrozenJobsTileComponent } from './frozen-jobs-tile/frozen-jobs-tile.component';
import { InitService } from './init.service';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, TilesModule, MatTableModule, MatCardModule, MatDialogModule, EuiCoreModule],
  declarations: [FrozenJobsTileComponent, FrozenJobsSidesheetComponent, FrozenJobDetailDialogComponent],
})
export class FrozenJobsPluginModule {
  constructor(private readonly initializer: InitService) {
    console.log('🔥 frozen-jobs-plugin loaded');
    this.initializer.onInit();
    console.log('▶️ frozen-jobs-plugin initialized');
  }
}
