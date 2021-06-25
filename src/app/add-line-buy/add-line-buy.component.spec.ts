import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLineBuyComponent } from './add-line-buy.component';

describe('AddLineBuyComponent', () => {
  let component: AddLineBuyComponent;
  let fixture: ComponentFixture<AddLineBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLineBuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLineBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
