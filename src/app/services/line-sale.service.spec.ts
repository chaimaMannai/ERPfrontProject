import { TestBed } from '@angular/core/testing';

import { LineSaleService } from './line-sale.service';

describe('LineSaleService', () => {
  let service: LineSaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineSaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
