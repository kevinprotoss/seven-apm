import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColleagueDetailComponent } from './colleague-detail.component';

describe('ColleagueDetailComponent', () => {
  let component: ColleagueDetailComponent;
  let fixture: ComponentFixture<ColleagueDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColleagueDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColleagueDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
