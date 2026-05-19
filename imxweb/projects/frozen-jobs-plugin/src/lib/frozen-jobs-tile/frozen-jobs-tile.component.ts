import { Component, OnDestroy, OnInit } from '@angular/core';

import { EuiSidesheetService } from '@elemental-ui/core';
import { FrozenJob } from '@imx-modules/imx-api-utilsplugin';
import { imx_SessionService } from 'qbm';
import { QerApiService } from 'qer';

import { FrozenJobsSidesheetComponent } from '../frozen-jobs-sidesheet/frozen-jobs-sidesheet.component';
import { UtilsPluginApiService } from '../utils-plugin-api.service';

@Component({
  selector: 'imx-frozen-jobs-tile',
  templateUrl: './frozen-jobs-tile.component.html',
  standalone: false,
})
export class FrozenJobsTileComponent implements OnInit, OnDestroy {
  public frozenJobsCount = 0;
  public isAuthorized = false;
  public loading = true;

  private frozenJobs: FrozenJob[] = [];
  private refreshTimer: ReturnType<typeof setInterval> | null = null;

  private static readonly REFRESH_INTERVAL_MS = 60_000;

  constructor(
    private readonly session: imx_SessionService,
    private readonly qerApiService: QerApiService,
    private readonly utilsPluginApi: UtilsPluginApiService,
    private readonly sidesheet: EuiSidesheetService,
  ) { }

  public async ngOnInit(): Promise<void> {
    try {
      const uidPerson = this.session.SessionState?.UserUid;
      if (uidPerson) {
        this.isAuthorized = await this.hasOpsupportRole(uidPerson);
      }

      if (this.isAuthorized) {
        this.frozenJobs = await this.utilsPluginApi.client.portal_imutils_frozenjobs_get();
        this.frozenJobsCount = this.frozenJobs.length;
        this.startRefreshTimer();
      }
    } catch (error) {
      console.error('[FrozenJobsTile] Error during initialization:', error);
    } finally {
      this.loading = false;
    }
  }

  public ngOnDestroy(): void {
    if (this.refreshTimer !== null) {
      clearInterval(this.refreshTimer);
    }
  }

  public onTileClick(): void {
    this.sidesheet.open(FrozenJobsSidesheetComponent, {
      title: 'Frozen Provisioning Jobs',
      padding: '0px',
      width: '800px',
      testId: 'frozen-jobs-sidesheet',
      data: { frozenJobs: this.frozenJobs },
    });
  }

  private async hasOpsupportRole(uidPerson: string): Promise<boolean> {
    const pageSize = 100;
    let startIndex = 0;

    do {
      const result = await this.qerApiService.client.portal_person_rolememberships_AERole_get(uidPerson, {
        withProperties: '-RoleFullPath',
        PageSize: pageSize,
        StartIndex: startIndex,
      });

      const entities = result.Entities ?? [];

      if (entities.some((e) => e.Columns?.['RoleFullPath']?.Value === 'Base roles\\Operations support')) {
        return true;
      }

      startIndex += entities.length;
      if (entities.length === 0 || startIndex >= result.TotalCount) {
        break;
      }
    } while (true);

    return false;
  }

  private startRefreshTimer(): void {
    this.refreshTimer = setInterval(() => {
      void this.refreshFrozenJobs();
    }, FrozenJobsTileComponent.REFRESH_INTERVAL_MS);
  }

  private async refreshFrozenJobs(): Promise<void> {
    try {
      this.frozenJobs = await this.utilsPluginApi.client.portal_imutils_frozenjobs_get();
      this.frozenJobsCount = this.frozenJobs.length;
    } catch (error) {
      console.error('[FrozenJobsTile] Refresh error:', error);
    }
  }
}

