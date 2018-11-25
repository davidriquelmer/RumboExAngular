import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentmainComponent } from './studentmain.component';

describe('StudentmainComponent', () => {
  let component: StudentmainComponent;
  let fixture: ComponentFixture<StudentmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
