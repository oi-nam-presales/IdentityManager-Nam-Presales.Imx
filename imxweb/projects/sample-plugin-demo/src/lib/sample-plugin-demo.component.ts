import { OverlayRef } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EuiLoadingService, EuiSidesheetService } from '@elemental-ui/core';
import { UserConfig, UserGroupInfo } from 'imx-api-qer';
//import { imx_SessionService } from 'qbm';

import { RequestsService } from 'qer';
import { SamplePluginDemoService } from './sample-plugin-demo.service';
import { SimpleUiComponent } from './simple-ui/simple-ui.component';


@Component({
  selector: 'imx-sample-plugin-demo',
  templateUrl: './sample-plugin-demo.component.html'
})

export class SamplePluginDemoComponent implements OnInit {

  caption: string = "Sample Plugin Demo";
  actionText: string = "For user: ";
  description: string = "Demonstrates a really simple plugin example";
  testMessage: string = "Test Message 'Zooza 2'";
  public userConfig: UserConfig;
  public userGroupInfo : UserGroupInfo[];
  public userName: string = "";

  constructor(
    public readonly router: Router,
    public readonly busyService: EuiLoadingService,
    public requestsService: RequestsService,
    public readonly sidesheetService: EuiSidesheetService,
    public samplePluginDemoService: SamplePluginDemoService

  ) { }

  async ngOnInit(): Promise<void> {
  //ngOnInit(): void {
    console.log("SamplePluginDemoComponent -> onInit-22")

    let overlayRef: OverlayRef;
    setTimeout(() => (overlayRef = this.busyService.show()));
    try {
      this.userName = await this.samplePluginDemoService.getUserName()
      this.actionText = this.actionText + " " + this.userName
      console.log("userName: " + this.userName);
    } finally {
      setTimeout(() => this.busyService.hide(overlayRef));
    }
  }

  async showMessage(): Promise<void>{
    console.log("Showing message");
    this.requestsService.openSnackbar(this.testMessage, '#LDS#Close');

    const title = this.actionText;

    //var userRoles = await this.samplePluginDemoService.userGetReportRoles();

    // const sidesheetRef = this.sidesheetService.open(
    //   SimpleUiComponent,
    //   {
    //     title,
    //     width: '700px',
    //     headerColour: 'iris-blue'
    //   }
    // );

    this.router.navigate(['sampleplugindemo']);
  }
  public ShowSamplePluginDemoLink(): boolean {
    // Starting a new request is only allowed when the session has an identity and the ITShop(Requests) feature is enabled

    //console.log("UserConfig = " + this.userConfig.ShowPasswordTile)
    //console.log("systemInfo = " + this.userGroupInfo)

    //return this.userName.startsWith("E") //this.userConfig?.IsITShopEnabled // && this.userUid && this.systemInfo.PreProps.includes('ITSHOP');
    return true
  }
}

