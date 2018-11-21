import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologistmainComponent } from './psychologistmain.component';

describe('PsychologistmainComponent', () => {
  let component: PsychologistmainComponent;
  let fixture: ComponentFixture<PsychologistmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychologistmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologistmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
