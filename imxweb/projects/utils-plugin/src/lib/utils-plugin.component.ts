import { Component, OnInit } from '@angular/core';
import { EuiSidesheetConfig, EuiSidesheetService } from '@elemental-ui/core';
import { imx_SessionService } from 'qbm';
import { RequestsService } from 'qer';
import { UtilsPluginScriptComponent } from './utils-plugin-script/utils-plugin-script.component';
import { UtilsPluginService } from './utils-plugin.service';

@Component({
  selector: 'imx-utils-plugin',
  templateUrl: './utils-plugin.component.html',
  styles: [
  ]
})
export class UtilsPluginComponent implements OnInit {

  caption: string = "Ask AI"
  actionText: string = "";
  userId: string = "";
  description: string = "Ask Azure OpenAI about data in Identity Manager"
  title: string = "Ask Azure OpenAI about data in Identity Manager"

  constructor(
    public requestsService: RequestsService,
    public readonly sessionService: imx_SessionService,
    public utilsPluginService: UtilsPluginService,
    private readonly sidesheetService: EuiSidesheetService
  ) { }

  async ngOnInit(): Promise<void> {
    console.log("UtilsPluginComponent -> onInit")
    this.userId =  (await this.sessionService.getSessionState()).UserUid
    this.actionText =  "User " + (await this.sessionService.getSessionState()).Username + " - start conversation"
  }

  public async doOnClickOperation(): Promise<void> {

    const title = this.title;

    const config: EuiSidesheetConfig = {
      title: title,
      width: '900px',
      headerColour: 'green',
      data: this.userId,
    };

    const sidesheetRef = this.sidesheetService.open(
      UtilsPluginScriptComponent, config
    );
  }
}
