import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExtService, imx_SessionService, ISessionState } from 'qbm';
import { RequestsService } from 'qer';

@Component({
  selector: 'imx-test-plugin',
  templateUrl: './test-plugin.component.html',
  styles: [
  ]
})
export class TestPluginComponent implements OnInit {
  userName: string;
  session: ISessionState;
  caption: string = "Test Plugin";
  actionText: string = "For user: ";
  description: string = "Demonstrates a really simple plugin example";


  constructor(
    public readonly router: Router,
    public readonly sessionService: imx_SessionService,
    public requestsService: RequestsService,
  ) { }

  async ngOnInit() {
    this.session = await this.sessionService.getSessionState()
    this.userName = this.session.Username
    this.actionText = "For user: " + this.userName
  }

  public ShowTestPluginLink(): boolean {

    if(this.userName){
      console.log("UserName:" + this.userName + " starts with 'E' = " + this.userName.startsWith("E"))
      //if(this.userName.startsWith("E")){
        return true;
      //}else{
      //  return false;
      //}

    //}else{
      //return false;
    }


  }

  public doSomething(){
    this.requestsService.openSnackbar(this.description, '#LDS#Close');
  }
}
