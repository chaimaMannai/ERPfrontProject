import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditOrderSaleComponent } from './add-or-edit-order-sale.component';

describe('AddOrEditOrderSaleComponent', () => {
  let component: AddOrEditOrderSaleComponent;
  let fixture: ComponentFixture<AddOrEditOrderSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrEditOrderSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditOrderSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
