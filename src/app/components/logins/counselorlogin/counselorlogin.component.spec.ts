import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounselorloginComponent } from './counselorlogin.component';

describe('CounselorloginComponent', () => {
  let component: CounselorloginComponent;
  let fixture: ComponentFixture<CounselorloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounselorloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounselorloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
