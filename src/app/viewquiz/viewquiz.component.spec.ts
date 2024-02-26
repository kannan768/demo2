import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewquizComponent } from './viewquiz.component';

describe('ViewquizComponent', () => {
  let component: ViewquizComponent;
  let fixture: ComponentFixture<ViewquizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewquizComponent]
    });
    fixture = TestBed.createComponent(ViewquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
