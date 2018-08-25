import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { College } from '../college';
import { CollegeService } from '../college.service';

enum Tabs {
  Majors = 1,
  Application = 2,
  Tuition = 3
}

@Component({
  selector: 'app-college-detail',
  templateUrl: './college-detail.component.html',
  styleUrls: ['./college-detail.component.css']
})
export class CollegeDetailComponent implements OnInit {
  Tabs = Tabs;
  activeTab: Tabs = 1;
  college$: Observable<College>;

  constructor(private route: ActivatedRoute, private collegeService: CollegeService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.college$ = this.collegeService.getCollege(id);
  }

}
