import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EuiSidesheetService } from '@elemental-ui/core';
import { ProjectConfig, UserGroupInfo } from 'imx-api-qbm';
import { PortalAdminPerson, PortalCandidatesPersonindepartment, PortalCandidatesPersonindepartmentWrapper, PortalPersonReportsInteractive } from 'imx-api-qer';
import { EntitySchema, ExtendedTypedEntityCollection, TypedEntity, TypedEntityCollectionData } from 'imx-qbm-dbts';
import { AppConfigService, ImxTranslationProviderService } from 'qbm';
import { IdentitySidesheetComponent, QerApiService, RoleService } from 'qer';
import { SamplePluginDemoService } from '../sample-plugin-demo.service';

@Component({
  selector: 'imx-simple-ui',
  templateUrl: './simple-ui.component.html',
  styleUrls: ['./simple-ui.component.css']
})
export class SimpleUiComponent implements OnInit {


  sampleMessage: string = "Hello World!"
  userGroupInfo: UserGroupInfo[];
  userRoles: TypedEntity[];
  entitySchema: EntitySchema;


  //deptData: TypedEntityCollectionData<PortalCandidatesPersonindepartment>
  //private testClient: V2Client;
  perInDeptWrapper: PortalCandidatesPersonindepartmentWrapper;
  depts: ExtendedTypedEntityCollection<PortalCandidatesPersonindepartment, unknown>;
  parametersOptional: {}

  constructor(
    public samplePluginDemoService: SamplePluginDemoService,
    private readonly appConfig: AppConfigService,
    private readonly router: Router,
    private readonly qerClient: QerApiService,
    private readonly translationProvider: ImxTranslationProviderService
  ) {

  }

  async ngOnInit() {
      console.log("SimpleUiComponent -> onInit")

      this.userGroupInfo = await this.samplePluginDemoService.userGroups();

      this.userRoles = await this.samplePluginDemoService.getUserRoles();
      //this.userRoles[0].GetEntity().GetDisplay()

      this.entitySchema = await this.qerClient.typedClient.PortalCandidatesPersonindepartment.GetSchema();

      var dept = this.depts.Data[0].GetEntity().GetDisplayLong()
  }

  navigateToStartPage():void{
      this.router.navigate([this.appConfig.Config.routeConfig.start], { queryParams: {} });
  }



}
