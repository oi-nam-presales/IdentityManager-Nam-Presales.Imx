import { TestBed } from '@angular/core/testing';

import { TestPluginService } from './test-plugin.service';

describe('TestPluginService', () => {
  let service: TestPluginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestPluginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
