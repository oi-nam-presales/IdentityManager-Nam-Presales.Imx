import { Component, Inject, OnInit } from '@angular/core';
import { EuiSidesheetRef, EuiSidesheetService, EUI_SIDESHEET_DATA, EuiLoadingService } from '@elemental-ui/core';
import { UtilsPluginService } from '../utils-plugin.service';
import { Router } from '@angular/router';
import { OverlayRef } from '@angular/cdk/overlay';
import { RequestsService } from 'qer';



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
 requestHistory: string = '';
 userRequest: string = '';
 errorMessage: string = '';
 history: string = '';
 hasAdminRole: boolean = false;
 systemMessage: string = '';
 systemMessageOriginal: string = '';
 sysMessageDisabled: boolean = true;
 buttonsDisabled: boolean = true;

  constructor(
    public readonly router: Router,
    public requestsService: RequestsService,
    private sidesheetService: EuiSidesheetService,
    private sidesheetRef: EuiSidesheetRef,
    public utilsPluginService: UtilsPluginService,
    private readonly busyService: EuiLoadingService,
    @Inject(EUI_SIDESHEET_DATA) public sidesheetdata?: any
  ) {}

  async ngOnInit(): Promise<void> {
    this.hasAdminRole = await this.utilsPluginService.userHasRole(this.sidesheetdata, "Admin");

    if(this.hasAdminRole){
      this.systemMessage = await this.utilsPluginService.getUpdateAISystemMessage('');
      this.systemMessageOriginal = this.systemMessage;
    }
  }

  async saveSystemMessage(): Promise<any> {
    try{

      if(window.confirm('Are sure you want to save the new system message ?')){
        const ret = await this.utilsPluginService.getUpdateAISystemMessage(this.systemMessage);

        this.requestsService.openSnackbar('System message updated', 'Done');
        this.sysMessageDisabled = true;
        this.buttonsDisabled = true;
      }

    }catch(e){
      this.requestsService.openSnackbar('Error saving system message', 'Done');
    }
  }

  async restoreOriginalSystemMessage(): Promise<void> {
    if(this.hasAdminRole){
      this.systemMessage = await this.utilsPluginService.restoreOriginalSystemMessage();
      this.systemMessageOriginal = this.systemMessage;
    }
  }

  toggleEdit(): void {

    if(this.buttonsDisabled){
      this.sysMessageDisabled = !this.sysMessageDisabled;
    }
  }

  doEnableSaveButton(): void {
    this.buttonsDisabled = false;
  }

  doCancel(): void {
    if(window.confirm('Are sure you want to disregard changes to system message? You will lose any unsaved changes.')){
      this.systemMessage = this.systemMessageOriginal;
      this.sysMessageDisabled = true;
      this.buttonsDisabled = true;
    }
  }

  async userGetFollowUpAIResponse(): Promise<any> {
    this.aiSummary = '';
    this.aiQuery = '';
    this.data = [];
    this.response = [];

    if(this.userRequest == ""){
      return;
    }

    if(this.requestHistory == "" ){
      this.requestHistory = "-" + this.userRequest
    }else{
      this.requestHistory = this.requestHistory + "\n" + "-" + this.userRequest
    }

    this.errorMessage = '';

    let overlayRef: OverlayRef;
    setTimeout(() => (overlayRef = this.busyService.show()));
    try {
      try{
          //const reqData = "show me all users working from San Diego"
        this.response = await this.utilsPluginService.userGetAIResponse(this.userRequest, this.history)
        this.userRequest = '';

        this.history = this.response.Result.history;

        if(this.response.Result.query){
          this.aiQuery = this.response.Result.query
        }

        if(this.response.Result.summary){
          this.aiSummary = this.response.Result.summary
        }

        if(this.response.Result.errorMessage){
          this.errorMessage = this.response.Result.errorMessage;
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

    if(this.userRequest == ""){
      return;
    }

      //Clear data
      this.aiSummary = '';
      this.aiQuery = '';
      this.data = [];
      this.response = [];
      this.history = '';
      this.errorMessage = '';

      this.requestHistory = "-" + this.userRequest;

      let overlayRef: OverlayRef;
      setTimeout(() => (overlayRef = this.busyService.show()));

      try {
        try{
            //const reqData = "show me all users working from San Diego"
          this.response = await this.utilsPluginService.userGetAIResponse(this.userRequest, this.history)
          this.userRequest = '';

          this.history = this.response.Result.history;

          if(this.response.Result.query){
            this.aiQuery = this.response.Result.query
          }

          if(this.response.Result.summary){
            this.aiSummary = this.response.Result.summary
          }

          if(this.response.Result.errorMessage){
            this.errorMessage = this.response.Result.errorMessage;
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




}
