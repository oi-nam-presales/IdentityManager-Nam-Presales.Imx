import { Component, OnInit } from '@angular/core';
import { SamplePluginService } from '../sample-plugin.service';

@Component({
  selector: 'imx-sample-plugin-message',
  templateUrl: './sample-plugin-message.component.html',
  styleUrls: ['./sample-plugin-message.component.scss']
})
export class SamplePluginMessageComponent implements OnInit {

  sampleMessage: string

  constructor(
    public inintServ: SamplePluginService
  ) { }

  ngOnInit(): void {
    this.sampleMessage = this.inintServ.sampleMessage
  }

}
