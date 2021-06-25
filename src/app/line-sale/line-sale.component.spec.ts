import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineSaleComponent } from './line-sale.component';

describe('LineSaleComponent', () => {
  let component: LineSaleComponent;
  let fixture: ComponentFixture<LineSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
