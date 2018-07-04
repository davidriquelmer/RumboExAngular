import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisorloginComponent } from './advisorlogin.component';

describe('AdvisorloginComponent', () => {
  let component: AdvisorloginComponent;
  let fixture: ComponentFixture<AdvisorloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvisorloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisorloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
