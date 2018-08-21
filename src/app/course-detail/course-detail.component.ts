import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PageScrollService } from '../page-scroll.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute, 
    private pageScrollService: PageScrollService) {
  }

  ngOnInit() {
    this.activatedRoute.fragment.subscribe( fragment => {
      this.pageScrollService.triggerScrollTo(fragment);
    });
  }

}
