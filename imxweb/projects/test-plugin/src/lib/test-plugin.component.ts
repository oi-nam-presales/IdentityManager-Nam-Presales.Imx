import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'imx-test-plugin',
  template: `
    <p>
      test-plugin works!
    </p>
  `,
  styles: [
  ]
})
export class TestPluginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
