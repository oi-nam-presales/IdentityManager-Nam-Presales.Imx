import { Injectable } from '@angular/core';
import { ExtService } from 'qbm';
import { GeoLocalitiesTileComponent } from './geo-localities-tile/geo-localities-tile.component';

@Injectable({ providedIn: 'root' })
export class InitService {
  constructor(private readonly extService: ExtService) { }

  public onInit(): void {
    this.extService.register('Dashboard-SmallTiles', { instance: GeoLocalitiesTileComponent });
  }
}
