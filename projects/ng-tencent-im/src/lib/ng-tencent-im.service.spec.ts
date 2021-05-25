import { TestBed } from '@angular/core/testing';

import { NgTencentImService } from './ng-tencent-im.service';

describe('NgTencentImService', () => {
  let service: NgTencentImService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgTencentImService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
