import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologistloginComponent } from './psychologistlogin.component';

describe('PsychologistloginComponent', () => {
  let component: PsychologistloginComponent;
  let fixture: ComponentFixture<PsychologistloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychologistloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
