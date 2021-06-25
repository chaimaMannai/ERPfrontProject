import { TestBed } from '@angular/core/testing';

import { OrderSaleServiceService } from './order-sale-service.service';

describe('OrderSaleServiceService', () => {
  let service: OrderSaleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderSaleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
