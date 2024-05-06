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

import { AppConfigService, ImxTranslationProviderService, SnackBarService } from 'qbm';
import { PasswordData, PasswordItemsData, PasswordresetPasswordquestions, PolicyValidationResult } from 'imx-api-qer';
import { QerApiService } from '../qer-api-client.service';
import { V2Client, TypedClient } from 'imx-api-utilsplugin';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  private v2Client: V2Client;
  private typedClient: TypedClient;

  constructor(
    private readonly qerApiService: QerApiService,
    private readonly snackbar: SnackBarService,
    private readonly appConfig: AppConfigService,
    private readonly translationProvider: ImxTranslationProviderService
  ) {
    const schemaProvider = appConfig.client;
    this.v2Client = new V2Client(appConfig.apiClient, schemaProvider);
    this.typedClient = new TypedClient(this.v2Client, this.translationProvider);
  }

  public async getPasswordItems(uidPerson?: string): Promise<PasswordItemsData> {

    if (uidPerson)
      return this.qerApiService.client.opsupport_passwords_get(uidPerson);
    return this.qerApiService.client.passwordreset_passwords_get();
  }

  public async postOrCheckPassword(data: PasswordData, uidPerson?: string): Promise<PolicyValidationResult[]> {
    if(uidPerson)
      return this.qerApiService.client.opsupport_passwords_post(uidPerson, data);
    return this.qerApiService.client.passwordreset_passwords_post(data);
  }

  // ToDo later: CollectionLoadParameters anbinden oder sinnvolle max-Zahl wählen (je nachdem, was dann die User Story sagt)
  public async getQuestions(): Promise<PasswordresetPasswordquestions[]> {
    return (await this.qerApiService.typedClient.PasswordresetPasswordquestions.Get()).Data;
  }

  public openSnackbar(message: string, action: string): void {
    this.snackbar.open({ key: message }, action);
  }

  public async userGetAccount(uidPerson): Promise<any> {
    try{
      var x = await this.typedClient.PasswordresetImutilsGetadaccount.Get(uidPerson);
      return x;
    }catch(e) {
      console.error(e);
    }
  }

  public async unlockAccount(uidADSAccountB): Promise<string> {
    try{
      var x = await this.v2Client.passwordreset_imutils_unlockaccountscript_get(uidADSAccountB)
      return 'OK';
    }catch(e) {
      return e.message;
    }
  }
}
