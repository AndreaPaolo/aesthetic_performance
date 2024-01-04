import { TestBed } from '@angular/core/testing';

import { ProgressioneService } from './progressione.service';

describe('ProgressioneService', () => {
  let service: ProgressioneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgressioneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
