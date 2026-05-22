/*
 * ONE IDENTITY LLC. PROPRIETARY INFORMATION
 *
 * This software is confidential.  One Identity, LLC. or one of its affiliates or
 * subsidiaries, has supplied this software to you under terms of a
 * license agreement, nondisclosure agreement or both.
 *
 * You may not copy, disclose, or use this software except in accordance with
 * those terms.
 *
 *
 * Copyright 2025 One Identity LLC.
 * ALL RIGHTS RESERVED.
 *
 * ONE IDENTITY LLC. MAKES NO REPRESENTATIONS OR
 * WARRANTIES ABOUT THE SUITABILITY OF THE SOFTWARE,
 * EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
 * TO THE IMPLIED WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE, OR
 * NON-INFRINGEMENT.  ONE IDENTITY LLC. SHALL NOT BE
 * LIABLE FOR ANY DAMAGES SUFFERED BY LICENSEE
 * AS A RESULT OF USING, MODIFYING OR DISTRIBUTING
 * THIS SOFTWARE OR ITS DERIVATIVES.
 *
 */

import { Injectable } from "@angular/core";
import { PlugInInfo } from "@imx-modules/imx-api-qbm";
import { AadConfigModule } from "aad";
import { AobConfigModule } from "aob";
import { ApcConfigModule } from "apc";
import { AttConfigModule } from "att";
import { CplConfigModule } from "cpl";
import { FrozenJobsPluginModule } from "frozen-jobs-plugin";
import { GeoPluginModule } from 'geo-plugin';
import { HdsConfigModule } from "hds";
import { IqcConfigModule } from "iqc";
import { OlgConfigModule } from "olg";
import { PolConfigModule } from "pol";
import { QamConfigModule } from "qam";
import { DynamicModuleImportService } from "qbm";
import { RmbConfigModule } from "rmb";
import { RmsConfigModule } from "rms";
import { RpsConfigModule } from "rps";
import { SacConfigModule } from "sac";
import { TsbConfigModule } from "tsb";

@Injectable({ providedIn: 'root' })
export class PortalDynamicModuleImportService extends DynamicModuleImportService {
  async loadFirstPartyModules(modules: PlugInInfo[]): Promise<void> {
    for (const module of modules) {
      let callback: () => Promise<any[]> = async () => [];
      switch (module.Container) {
        case 'aad':
          callback = async () => {
            await import('aad');
            return [AadConfigModule];
          };
          break;
        case 'aob':
          callback = async () => {
            await import('aob');
            return [AobConfigModule];
          };
          break;
        case 'apc':
          callback = async () => {
            await import('apc');
            return [ApcConfigModule];
          };
          break;
        case 'att':
          callback = async () => {
            await import('att');
            return [AttConfigModule];
          };
          break;
        case 'cpl':
          callback = async () => {
            await import('cpl');
            return [CplConfigModule];
          };
          break;
        case 'hds':
          callback = async () => {
            await import('hds');
            return [HdsConfigModule];
          };
          break;
        case 'iqc':
          callback = async () => {
            await import('iqc');
            return [IqcConfigModule];
          };
          break;
        case 'olg':
          callback = async () => {
            await import('olg');
            return [OlgConfigModule];
          };
          break;
        case 'pol':
          callback = async () => {
            await import('pol');
            return [PolConfigModule];
          };
          break;
        case 'qam':
          callback = async () => {
            await import('qam');
            return [QamConfigModule];
          };
          break;
        case 'rmb':
          callback = async () => {
            await import('rmb');
            return [RmbConfigModule];
          };
          break;
        case 'rms':
          callback = async () => {
            await import('rms');
            return [RmsConfigModule];
          };
          break;
        case 'rps':
          callback = async () => {
            await import('rps');
            return [RpsConfigModule];
          };
          break;
        case 'sac':
          callback = async () => {
            await import('sac');
            return [SacConfigModule];
          };
          break;
        case 'tsb':
          callback = async () => {
            await import('tsb');
            return [TsbConfigModule];
          };
          break;
        case 'frozen-jobs-plugin':
          callback = async () => {
            await import('frozen-jobs-plugin');
            return [FrozenJobsPluginModule];
          };
          break;
        case 'geo-plugin':
          callback = async () => {
            await import('geo-plugin');
            return [GeoPluginModule];
          };
          break;
        default:
          break;
      }
      await this.loadModule(module, callback);
    }
  }

  async loadThirdPartyModules(modules: PlugInInfo[]): Promise<void> {
    // Use the JSDoc example of how to handle any external modules you have built
    //return;

    await this.loadModule(
      { Container: 'frozen-jobs-plugin', Name: 'FrozenJobsPluginModule' } as PlugInInfo,
      async () => {
        await import('frozen-jobs-plugin');
        return [FrozenJobsPluginModule];
      }
    );

    await this.loadModule(
      { Container: 'geo-plugin', Name: 'GeoPluginModule' } as PlugInInfo,
      async () => {
        await import('geo-plugin');
        return [GeoPluginModule];
      }
    );

  }

}
