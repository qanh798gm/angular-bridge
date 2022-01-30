import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstGrandChildComponent } from './first-grand-child.component';

describe('FirstGrandChildComponent', () => {
  let component: FirstGrandChildComponent;
  let fixture: ComponentFixture<FirstGrandChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstGrandChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstGrandChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
