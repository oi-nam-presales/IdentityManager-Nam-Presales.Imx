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
 * Copyright 2023 One Identity LLC.
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

import { Injectable } from '@angular/core';
import { OpsupportQueueDbqueue } from 'imx-api-qbm';
import { CollectionLoadParameters, ExtendedTypedEntityCollection } from 'imx-qbm-dbts';
import { imx_SessionService } from 'qbm';

@Injectable({
  providedIn: 'root',
})
export class DbQueueService {
  constructor(private session: imx_SessionService) {}

  public get DbSchema () {
    return this.session.TypedClient.OpsupportQueueDbqueue.GetSchema();
  }

  public async get(parameter: CollectionLoadParameters): Promise<ExtendedTypedEntityCollection<OpsupportQueueDbqueue, unknown>> {
    return this.session.TypedClient.OpsupportQueueDbqueue.Get(parameter);
  }
}
