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
 * Copyright 2021 One Identity LLC.
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

import { OverlayRef } from '@angular/cdk/overlay';
import { Component, Input, OnInit } from '@angular/core';
import { EuiLoadingService } from '@elemental-ui/core';

import { CollectionLoadParameters, DisplayColumns, EntitySchema, IClientProperty, ValType } from 'imx-qbm-dbts';
import { DataSourceToolbarSettings, DynamicTabDataProviderDirective, SettingsService } from 'qbm';
import { EntitySchemaNew } from './account-ext-declaration';
import { AccountsExtService } from './account-ext.service';

@Component({
  templateUrl: './accounts-ext.component.html',
  styleUrls: [
    '../accounts.component.scss',
    './accounts-ext.component.scss'],
})
export class AccountsExtComponent implements OnInit {

  @Input() public referrer: {
    objecttable?: string;
    objectuid?: string;
    tablename?: string;
  };

  public dstSettings: DataSourceToolbarSettings;
  public readonly DisplayColumns = DisplayColumns;

  public entitySchemaAccount: EntitySchema;
  //P.S.
  public entitySchemaAccountNew: EntitySchemaNew;

  private displayColumns: IClientProperty[] = [];
  private navigationState: CollectionLoadParameters;

  displayColumn: any;

  constructor(
    private readonly busyService: EuiLoadingService,
    private readonly settingService: SettingsService,
    private readonly accountsService: AccountsExtService,
    dataProvider: DynamicTabDataProviderDirective
  ) {
    this.referrer = dataProvider?.data;
    this.navigationState = { PageSize: this.settingService.DefaultPageSize };
    this.entitySchemaAccount = accountsService.portalPersonAccountsSchema;

    this.displayColumn = { ColumnName: "AccountDisabled", Description: "", Display: "Account Disabled", IsReadOnly: true, IsValidColumnForFiltering: false, Type: ValType.Bool }

    this.entitySchemaAccountNew = new EntitySchemaNew(this.entitySchemaAccount, this.displayColumn)



    this.displayColumns = [
      this.entitySchemaAccount.Columns.AccountName,
      this.entitySchemaAccount.Columns.UID_DPRNameSpace,
      this.entitySchemaAccount.Columns.UID_UNSRoot,
      this.displayColumn
    ];
  }

  public async ngOnInit(): Promise<void> {
    return this.getData();
  }

  public async onNavigationStateChanged(newState?: CollectionLoadParameters): Promise<void> {
    if (newState) {
      this.navigationState = newState;
    }
    await this.getData();
  }

  public async onSearch(keywords: string): Promise<void> {
    this.navigationState.StartIndex = 0;
    this.navigationState.search = keywords;
    await this.getData();
  }

  private async getData(): Promise<void> {

    let overlayRef: OverlayRef;
    setTimeout(() => overlayRef = this.busyService.show());
    try {
      //const groupsPerIdentity = await this.accountsService.getAccounts(this.referrer.objectuid);
      const groupsPerIdentity = this.accountsService.getAccountsWithExtraColumns(this.referrer.objectuid, "AccountDisabled");
      this.dstSettings = {
        displayedColumns: this.displayColumns,
        dataSource: await groupsPerIdentity,
        entitySchema: this.entitySchemaAccountNew,
        navigationState: this.navigationState
      };
    } finally {
      setTimeout(() => this.busyService.hide(overlayRef));
    }
  }
}
