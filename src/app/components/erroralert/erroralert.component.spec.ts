import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroralertComponent } from './erroralert.component';

describe('ErroralertComponent', () => {
  let component: ErroralertComponent;
  let fixture: ComponentFixture<ErroralertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErroralertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErroralertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
