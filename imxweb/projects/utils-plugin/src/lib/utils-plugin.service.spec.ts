import { TestBed } from '@angular/core/testing';

import { UtilsPluginService } from './utils-plugin.service';

describe('UtilsPluginService', () => {
  let service: UtilsPluginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsPluginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
