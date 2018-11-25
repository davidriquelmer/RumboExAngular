import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentormainComponent } from './mentormain.component';

describe('MentormainComponent', () => {
  let component: MentormainComponent;
  let fixture: ComponentFixture<MentormainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentormainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentormainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
