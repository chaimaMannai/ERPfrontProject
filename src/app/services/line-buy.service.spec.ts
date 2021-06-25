import { TestBed } from '@angular/core/testing';

import { LineBuyService } from './line-buy.service';

describe('LineBuyService', () => {
  let service: LineBuyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineBuyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
