import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Major } from '../major';
import { MajorService } from '../major.service';

@Component({
  selector: 'app-major-detail',
  templateUrl: './major-detail.component.html',
  styleUrls: ['./major-detail.component.css']
})
export class MajorDetailComponent implements OnInit {
  major$: Observable<Major>;
  
  constructor(private route: ActivatedRoute, private majorService: MajorService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.major$ = this.majorService.getMajor(id);
  }

}
