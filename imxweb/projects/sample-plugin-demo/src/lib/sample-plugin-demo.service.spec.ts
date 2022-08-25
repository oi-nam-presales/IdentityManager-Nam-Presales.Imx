import { TestBed } from '@angular/core/testing';

import { SamplePluginDemoService } from './sample-plugin-demo.service';

describe('SamplePluginDemoService', () => {
  let service: SamplePluginDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SamplePluginDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
