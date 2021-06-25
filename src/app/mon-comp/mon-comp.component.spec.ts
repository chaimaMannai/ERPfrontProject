import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonCompComponent } from './mon-comp.component';

describe('MonCompComponent', () => {
  let component: MonCompComponent;
  let fixture: ComponentFixture<MonCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
