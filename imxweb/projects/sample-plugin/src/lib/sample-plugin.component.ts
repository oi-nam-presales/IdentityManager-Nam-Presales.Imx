import { Component, OnInit } from '@angular/core';
import { EuiSidesheetConfig, EuiSidesheetService } from '@elemental-ui/core';
import { RequestsService } from 'qer';
import { SamplePluginService } from './sample-plugin.service';

import { SamplePluginMessageComponent } from './sample-plugin-message/sample-plugin-message.component';

@Component({
  selector: 'imx-sample-plugin',
  templateUrl: './sample-plugin.component.html',
  styles: [
  ]
})
export class SamplePluginComponent implements OnInit {

  caption: string = "View Message of the Day"
  actionText: string = "Message of the Day";
  testMessage: string = "Today is sunny";
  description: string = "Management will place message of the day here"
  config: EuiSidesheetConfig


  constructor(
    public requestsService: RequestsService,
    private readonly sidesheetService: EuiSidesheetService,
    public initServ: SamplePluginService
  ) { }

  ngOnInit(): void {
    console.log("SamplePluginComponent -> onInit")
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
        headerColour: 'iris-blue',
      }
    );

  }

}
