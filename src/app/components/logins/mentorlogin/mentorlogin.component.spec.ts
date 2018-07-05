import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorloginComponent } from './mentorlogin.component';

describe('MentorloginComponent', () => {
  let component: MentorloginComponent;
  let fixture: ComponentFixture<MentorloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
