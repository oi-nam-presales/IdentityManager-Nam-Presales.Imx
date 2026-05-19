import { Injectable } from '@angular/core';

import { ExtService } from 'qbm';
import { FrozenJobsTileComponent } from './frozen-jobs-tile/frozen-jobs-tile.component';

@Injectable({ providedIn: 'root' })
export class InitService {
  constructor(private readonly extService: ExtService) {}

  public onInit(): void {
    this.extService.register('Dashboard-SmallTiles', { instance: FrozenJobsTileComponent });
  }
}
