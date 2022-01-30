import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondGrandChildComponent } from './second-grand-child.component';

describe('SecondGrandChildComponent', () => {
  let component: SecondGrandChildComponent;
  let fixture: ComponentFixture<SecondGrandChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondGrandChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondGrandChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
