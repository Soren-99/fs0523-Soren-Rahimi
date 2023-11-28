import { TestBed } from '@angular/core/testing';

import { PizzeService } from './pizze.service';

describe('PizzeService', () => {
  let service: PizzeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
