import { Injectable } from '@angular/core';

import { V2Client } from '@imx-modules/imx-api-utilsplugin';
import { AppConfigService, ClassloggerService } from 'qbm';

@Injectable({
  providedIn: 'root',
})
export class UtilsPluginApiService {
  private c: V2Client;
  public get client(): V2Client {
    return this.c;
  }

  constructor(
    private readonly config: AppConfigService,
    private readonly logger: ClassloggerService,
  ) {
    try {
      this.logger.debug(this, 'Initializing UtilsPlugin API service');
      const schemaProvider = config.client;
      this.c = new V2Client(this.config.apiClient, schemaProvider);
    } catch (e) {
      this.logger.error(this, e);
    }
  }
}
