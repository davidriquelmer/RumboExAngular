import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounselormainComponent } from './counselormain.component';

describe('CounselormainComponent', () => {
  let component: CounselormainComponent;
  let fixture: ComponentFixture<CounselormainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounselormainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounselormainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
