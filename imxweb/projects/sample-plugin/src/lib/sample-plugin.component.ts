import { Component, ErrorHandler, OnInit } from '@angular/core';
import { EuiLoadingService, EuiSidesheetConfig, EuiSidesheetService } from '@elemental-ui/core';
import { IdentitySidesheetComponent, ProjectConfigurationService, QerApiService, RequestsService, UserModelService } from 'qer';
import { SamplePluginService } from './sample-plugin.service';

import { SamplePluginMessageComponent } from './sample-plugin-message/sample-plugin-message.component';
import { OwnershipInformation, PortalPersonMasterdataInteractive, PortalPersonMasterdataWrapper, PortalPersonReports, PortalPersonReportsInteractive, ProjectConfig } from 'imx-api-qer';
import { OverlayRef } from '@angular/cdk/overlay';
import { imx_SessionService } from 'qbm';
import { first } from 'rxjs/operators';
//import { Console } from 'console';
import { CompareOperator, FilterData, FilterType, IEntity, IWriteValue, ValType } from 'imx-qbm-dbts';

@Component({
  selector: 'imx-sample-plugin',
  templateUrl: './sample-plugin.component.html',
  styles: [
  ]
})
export class SamplePluginComponent implements OnInit {

  caption: string = "View Personal Information"
  actionText: string = "";
  testMessage: string = "Today is sunny";
  description: string = "Logged in user can view his entitlements"
  config: EuiSidesheetConfig
  isAdmin: Boolean = false
  tableName: string = "Department"

  private projectConfig: ProjectConfig;
  userIdentity: any;
  userID: string;
  public ownerships: OwnershipInformation[];
  public viewReady: boolean;

  constructor(
    public requestsService: RequestsService,
    private readonly sidesheetService: EuiSidesheetService,
    public readonly sessionService: imx_SessionService,
    public initServ: SamplePluginService,
    private readonly busyService: EuiLoadingService,
    private readonly qerClient: QerApiService,
    private readonly errorHandler: ErrorHandler,
    private readonly sideSheet: EuiSidesheetService,
    private readonly configService: ProjectConfigurationService,
    private readonly userModelService: UserModelService,
  ) { }

  async ngOnInit(): Promise<void> {
    console.log("SamplePluginComponent -> onInit")
    this.userID = (await this.sessionService.getSessionState()).UserUid
    this.actionText = (await this.sessionService.getSessionState()).Username
    let overlayRef: OverlayRef;
    setTimeout(() => overlayRef = this.busyService.show());
    try {
      const userConfig = await this.userModelService.getUserConfig();
      this.ownerships = userConfig.Ownerships;

      this.projectConfig = await this.configService.getConfig();

      this.viewReady = true;
    } finally {
      setTimeout(() => this.busyService.hide(overlayRef));
    }
  }

  showMessage(): void{
    console.log("Showing message");
    this.requestsService.openSnackbar(this.testMessage, '#LDS#Close');

    const title = this.actionText;

    this.initServ.sampleMessage = this.testMessage;

    const sidesheetRef = this.sidesheetService.open(
      SamplePluginMessageComponent,
      {
        title,
        width: '700px',
        headerColour: 'green',
        data: {
          isAdmin: this.isAdmin,
          ownershipInfo: {
            TableName: this.tableName,
            Count: 1,
          }
        }
      }
    );

  }

  public async openIdentitySidesheet(): Promise<void> {

    let initId: PortalPersonMasterdataInteractive;
    let selectedIdentity: PortalPersonMasterdataInteractive;

    let overlayRef: OverlayRef;
    setTimeout(() => overlayRef = this.busyService.show());
    try {

      const identityCollection = await this.qerClient.typedClient.PortalPersonMasterdataInteractive.Get_byid(this.userID);
      selectedIdentity = identityCollection?.Data?.[0];

    }catch (e){
      console.error(e);
    } finally {
      setTimeout(() => this.busyService.hide(overlayRef));
    }

    if (!selectedIdentity) {
      this.errorHandler.handleError('Identity could not be loaded.');
      return;
    }

    await this.sideSheet.open(IdentitySidesheetComponent, {
      title: selectedIdentity.GetEntity().GetDisplay(),
      headerColour: 'iris-blue',
      padding: '0px',
      disableClose: true,
      width: 'max(700px, 70%)',
      icon: 'contactinfo',
      testId: 'identity-sidesheet',
      data: {
        isAdmin: false,
        projectConfig: this.projectConfig,
        selectedIdentity,
      }
    }).afterClosed().toPromise();

  }
}
function IReadValue<T>(arg0: number): import("imx-qbm-dbts").IReadValue<number> {
  throw new Error('Function not implemented.');
}

