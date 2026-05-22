import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule, Routes } from '@angular/router';
import { EuiCoreModule } from '@elemental-ui/core';
import { TilesModule } from 'qer';

import { GeoLocalitiesTileComponent } from './geo-localities-tile/geo-localities-tile.component';
import { GeoLocalityPersonsSidesheetComponent } from './geo-locality-persons-sidesheet/geo-locality-persons-sidesheet.component';
import { GeoMapSidesheetComponent } from './geo-map-sidesheet/geo-map-sidesheet.component';
import { InitService } from './init.service';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    TilesModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    EuiCoreModule,
  ],
  declarations: [
    GeoLocalitiesTileComponent,
    GeoMapSidesheetComponent,
    GeoLocalityPersonsSidesheetComponent,
  ],
})
export class GeoPluginModule {
  constructor(private readonly initializer: InitService) {
    console.log('🌍 geo-plugin loaded');
    this.initializer.onInit();
    console.log('▶️ geo-plugin initialized');
  }
}
