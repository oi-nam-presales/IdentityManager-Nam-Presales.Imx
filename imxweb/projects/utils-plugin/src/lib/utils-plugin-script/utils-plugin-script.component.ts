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
 exportDataType: string = 'CSV';

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
      if(this.hasAdminRole){
        if(window.confirm('Save new system message?')){
          const ret = await this.utilsPluginService.getUpdateAISystemMessage(this.systemMessage);

          this.requestsService.openSnackbar('System message updated', 'Done');
          this.sysMessageDisabled = true;
          this.buttonsDisabled = true;
        }
      }

    }catch(e){
      this.requestsService.openSnackbar('Error saving system message', 'Done');
    }
  }

  async restoreOriginalSystemMessage(): Promise<void> {
    if(this.hasAdminRole){
      if(window.confirm('Are sure you want to restore the original system message? All changes will be lost.')){
        this.systemMessage = await this.utilsPluginService.restoreOriginalSystemMessage();
        this.systemMessageOriginal = this.systemMessage;
      }
    }
  }

  toggleEdit(): void {
    if(this.hasAdminRole){
      if(this.buttonsDisabled){
        this.sysMessageDisabled = !this.sysMessageDisabled;
      }
    }
  }

  doEnableSaveButton(): void {
    if(this.systemMessage != this.systemMessageOriginal){
      this.buttonsDisabled = false;
    }else{
      this.buttonsDisabled = true;
    }
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

  exportDataFile(): void {
    //console.log("Exporting data file to CSV." + this.exportDataType);
    let outData: string = ''
    let fileName : string = ''
    let dataType : string = ''
    
    if(this.exportDataType == "CSV"){
      const items = this.response.Result.data

        const header = Object.keys(items[0])
        outData = [
          header.join(','), // header row first
          ...items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], this.replacer)).join(','))
        ].join('\r\n')

        console.log(outData)

        fileName = "IMAIdata.csv"
        dataType = "text/csv"

    }else if(this.exportDataType == "JSON"){
      outData = JSON.stringify(this.response.Result.data)
      fileName = "IMAIdata.json"
      dataType = "application/json"
    }

    this.downloadFile(outData, fileName, dataType);

  }


  replacer(key, value: string) {

    let ret = ''

    if(value === null){
      ret = '';
    } else{
      ret = value;
     } // specify how you want to handle null values here

     if(typeof value === 'string' && value.includes('"')){
      ret = value.replace(/"/g, "'");
     }

     return ret;

  }


  downloadFile(data: string, filename: string, type: string) {

    let newVariable: any = window.navigator;

    const blob = new Blob([data], { type: type });
    if (newVariable.msSaveOrOpenBlob) {
      newVariable.msSaveBlob(blob, filename);
    } else {
      const link = document.createElement('a');
      link.setAttribute('href', URL.createObjectURL(blob));
      link.setAttribute('download', filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

}
