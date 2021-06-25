import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinesBuysComponent } from './lines-buys.component';

describe('LinesBuysComponent', () => {
  let component: LinesBuysComponent;
  let fixture: ComponentFixture<LinesBuysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinesBuysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinesBuysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
