import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { EuiSidesheetRef, EuiSidesheetService, EUI_SIDESHEET_DATA, EuiLoadingService } from '@elemental-ui/core';
import { UtilsPluginService } from '../utils-plugin.service';
import { Router } from '@angular/router';
import { OverlayRef } from '@angular/cdk/overlay';


@Component({
  selector: 'imx-utils-plugin-script',
  templateUrl: './utils-plugin-script.component.html',
  styleUrls: ['./utils-plugin-script.component.css']
})
export class UtilsPluginScriptComponent implements OnInit {


 response: any;
 data: any[] = [];
 columns: string[] = [];
 displayedColumns: string[] = [];
 aiSummary: string = '';
 aiQuery: string = '';
 userRequest: string = '';
 followUpRequest: string = '';
 errorMessage: string = '';
 history: any[] = [];


  constructor(
    public readonly router: Router,
    private sidesheetService: EuiSidesheetService,
    private sidesheetRef: EuiSidesheetRef,
    public utilsPluginService: UtilsPluginService,
    private readonly busyService: EuiLoadingService,
    @Inject(EUI_SIDESHEET_DATA) public sidesheetdata?: any
  ) {}

  async userGetFollowUpAIResponse(): Promise<any> {
    this.aiSummary = '';
    this.aiQuery = '';
    this.data = [];
    this.response = [];

    if(this.userRequest == "" && this.followUpRequest == ""){
      return;
    }

    if(this.userRequest == "" && this.followUpRequest != ""){
      this.userRequest = this.followUpRequest
    }

    if(this.userRequest != "" && this.followUpRequest != ""){
      this.userRequest = this.userRequest + "\n" + this.followUpRequest
    }

    //return;

    let overlayRef: OverlayRef;
    setTimeout(() => (overlayRef = this.busyService.show()));
    try {
      try{
          //const reqData = "show me all users working from San Diego"
        this.response = await this.utilsPluginService.userGetAIResponse(this.followUpRequest, this.history)
        this.history = this.response.Result.history;

        if(this.response.Result.query){
          this.aiQuery = this.response.Result.query
        }

        if(this.response.Result.summary){
          this.aiSummary = this.response.Result.summary
        }


        if (this.response.Result.data.length > 0) {
          this.columns = Object.keys(this.response.Result.data[0]);
          this.displayedColumns = [...this.columns];
          this.data = this.response.Result.data
        }else{
          this.columns = []
          this.displayedColumns = [];
        }
      }catch(e) {
        console.error(e);
      }

    } finally {
      setTimeout(() => this.busyService.hide(overlayRef));
    }
  }

   async userGetAIResponse(): Promise<any> {

    if(this.userRequest == "" && this.followUpRequest == ""){
      return;
    }

    this.userRequest = this.followUpRequest


      //Clear data
      this.aiSummary = '';
      this.aiQuery = '';
      this.data = [];
      this.response = [];

      let overlayRef: OverlayRef;
      setTimeout(() => (overlayRef = this.busyService.show()));

      try {
        try{
            //const reqData = "show me all users working from San Diego"
          this.response = await this.utilsPluginService.userGetAIResponse(this.userRequest, this.history)

          if(this.response.query){
            this.aiQuery = this.response.query
          }

          if(this.response.summary){
            this.aiSummary = this.response.summary
          }


          if (this.response.data.length > 0) {
            this.columns = Object.keys(this.response.data[0]);
            this.displayedColumns = [...this.columns];
            this.data = this.response.data
          }else{
            this.columns = []
            this.displayedColumns = [];
          }
        }catch(e) {
          console.error(e);
        }

      } finally {
        setTimeout(() => this.busyService.hide(overlayRef));
      }
  }

  async ngOnInit(): Promise<void> {

  }



}
