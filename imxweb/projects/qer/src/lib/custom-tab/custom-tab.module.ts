import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutstandingUsersComponent } from './outstanding-users/outstanding-users.component';
import { CdrModule, DataSourceToolbarModule, DataTableModule, HELP_CONTEXTUAL, HelpContextualModule, RouteGuardService } from 'qbm';
import { EuiCoreModule } from '@elemental-ui/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { TranslateModule } from '@ngx-translate/core';
import { OrgChartModule } from '../org-chart/org-chart.module';

const routes: Routes = [
  {
      path: 'outstandingusers',
      component: OutstandingUsersComponent,
      canActivate: [RouteGuardService],
      resolve: [RouteGuardService],
      data: {
          contextId: HELP_CONTEXTUAL.Addressbook
      }
  },
];


@NgModule({
  declarations: [
    OutstandingUsersComponent
  ],
  imports: [
    CommonModule,
    CdrModule,
    EuiCoreModule,
    DataSourceToolbarModule,
    DataTableModule,
    HelpContextualModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    TranslateModule,
    OrgChartModule
  ],
  exports: [
    OutstandingUsersComponent
  ]
})
export class CustomTabModule { }
