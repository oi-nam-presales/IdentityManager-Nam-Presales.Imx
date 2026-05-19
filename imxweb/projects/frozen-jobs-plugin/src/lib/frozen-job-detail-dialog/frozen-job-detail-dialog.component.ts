import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FrozenJob } from '@imx-modules/imx-api-utilsplugin';

@Component({
  selector: 'imx-frozen-job-detail-dialog',
  templateUrl: './frozen-job-detail-dialog.component.html',
  styleUrls: ['./frozen-job-detail-dialog.component.scss'],
  standalone: false,
})
export class FrozenJobDetailDialogComponent {
  constructor(
    public readonly dialogRef: MatDialogRef<FrozenJobDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public readonly job: FrozenJob,
  ) { }
}
