import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualCourseComponent } from './individual-course.component';

describe('IndividualCourseComponent', () => {
  let component: IndividualCourseComponent;
  let fixture: ComponentFixture<IndividualCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
