import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { EUI_SIDESHEET_DATA } from '@elemental-ui/core';
import { FrozenJob } from '@imx-modules/imx-api-utilsplugin';

import { FrozenJobDetailDialogComponent } from '../frozen-job-detail-dialog/frozen-job-detail-dialog.component';

@Component({
  selector: 'imx-frozen-jobs-sidesheet',
  templateUrl: './frozen-jobs-sidesheet.component.html',
  styleUrls: ['./frozen-jobs-sidesheet.component.scss'],
  standalone: false,
  host: { 'data-component-id': 'frozen-jobs-sidesheet' },
})
export class FrozenJobsSidesheetComponent {
  public displayedColumns = ['StartTime', 'JobChainName', 'CausingObject', 'TargetSystem'];

  constructor(
    @Inject(EUI_SIDESHEET_DATA) public data: { frozenJobs: FrozenJob[] },
    private readonly dialog: MatDialog,
  ) { }

  public onRowClick(job: FrozenJob): void {
    this.dialog.open(FrozenJobDetailDialogComponent, {
      data: job,
      width: '600px',
      maxHeight: '80vh',
    });
  }
}
