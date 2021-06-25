import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLineSaleComponent } from './add-line-sale.component';

describe('AddLineSaleComponent', () => {
  let component: AddLineSaleComponent;
  let fixture: ComponentFixture<AddLineSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLineSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLineSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
