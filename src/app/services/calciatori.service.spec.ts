import { TestBed } from '@angular/core/testing';

import { CalciatoriService } from './calciatori.service';

describe('CalciatoriService', () => {
  let service: CalciatoriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalciatoriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
