import { Injectable } from '@angular/core';
import { ExtService } from 'qbm';
import { SamplePluginComponent } from './sample-plugin.component';

@Injectable({
  providedIn: 'root'
})
export class SamplePluginService {

  constructor(
    private readonly extService: ExtService 
  ) {  }

  public onInit(): void{
    this.extService.register('Dashboard-SmallTiles', {instance: SamplePluginComponent})
  } 
}
