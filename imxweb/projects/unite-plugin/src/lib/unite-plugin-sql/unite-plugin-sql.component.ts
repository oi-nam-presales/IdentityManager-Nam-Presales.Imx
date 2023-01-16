import { Component, OnInit } from '@angular/core';
import { DataSourceToolbarSettings, imx_SessionService } from 'qbm';
import { UnitePluginService } from '../unite-plugin.service';

@Component({
  selector: 'imx-unite-plugin-sql',
  templateUrl: './unite-plugin-sql.component.html',
  styleUrls: ['./unite-plugin-sql.component.css']
})
export class UnitePluginSqlComponent implements OnInit {

  myDataArray: any;
  public dstSettings: DataSourceToolbarSettings;
  userId: string = "";

  constructor(
    public readonly sessionService: imx_SessionService,
    public unitePluginService: UnitePluginService
  ) { }

  async ngOnInit(): Promise<void> {
    this.userId =  (await this.sessionService.getSessionState()).UserUid
    var roles = await this.unitePluginService.userGetReportRolesSQL(this.userId);

    this.myDataArray = roles
  }

}
