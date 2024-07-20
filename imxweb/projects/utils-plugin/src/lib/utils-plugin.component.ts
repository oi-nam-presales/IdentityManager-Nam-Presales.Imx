import { Component, OnInit } from '@angular/core';
import { EuiSidesheetConfig, EuiSidesheetService } from '@elemental-ui/core';
import { ExtService, imx_SessionService } from 'qbm';
import { QerApiService, RequestsService } from 'qer';
import { UtilsPluginScriptComponent } from './utils-plugin-script/utils-plugin-script.component';
import { UtilsPluginService } from './utils-plugin.service';
import { ApiRequestOptions } from 'imx-qbm-dbts';

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
  hasRole: boolean = false;
  options: ApiRequestOptions;

  constructor(
    public requestsService: RequestsService,
    public readonly sessionService: imx_SessionService,
    public utilsPluginService: UtilsPluginService,
    private readonly sidesheetService: EuiSidesheetService,
    private readonly extService: ExtService,
    private readonly qerApiClient: QerApiService,
  ) { }

  async ngOnInit(): Promise<void> {
    console.log("UtilsPluginComponent -> onInit")
    this.userId =  (await this.sessionService.getSessionState()).UserUid
    this.actionText =  "Start conversation"

    this.hasRole = await this.utilsPluginService.userHasRole(this.userId);

    // var options = {
    //   PageSize: 500
    // };

    //var roles = await this.qerApiClient.client.portal_person_rolememberships_AERole_get(this.userId) //, options)

    // roles.Entities.forEach(role => {
    //   if(role.Display == "AI"){
    //     this.hasRole = true;
    //     return;
    //     }
    // });
  }

  public async doOnClickOperation(): Promise<void> {

    const title = this.title;

    const config: EuiSidesheetConfig = {
      title: title,
      width: '1200px',
      headerColour: 'green',
      data: this.userId,
    };

    const sidesheetRef = this.sidesheetService.open(
      UtilsPluginScriptComponent, config
    );
  }
}
