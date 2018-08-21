import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorDetailComponent } from './major-detail.component';

describe('MajorDetailComponent', () => {
  let component: MajorDetailComponent;
  let fixture: ComponentFixture<MajorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
