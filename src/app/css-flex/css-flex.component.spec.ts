import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssFlexComponent } from './css-flex.component';

describe('CssFlexComponent', () => {
  let component: CssFlexComponent;
  let fixture: ComponentFixture<CssFlexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssFlexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
