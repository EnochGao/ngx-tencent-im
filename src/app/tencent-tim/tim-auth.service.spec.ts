/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TimAuthService } from './tim-auth.service';

describe('Service: TimAuth', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimAuthService]
    });
  });

  it('should ...', inject([TimAuthService], (service: TimAuthService) => {
    expect(service).toBeTruthy();
  }));
});
