import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Major } from '../major';
import { MajorService } from '../major.service';

@Component({
  selector: 'app-majors',
  templateUrl: './majors.component.html',
  styleUrls: ['./majors.component.css']
})
export class MajorsComponent implements OnInit {
  majors$: Observable<Major[]>;
  
  constructor(private majorService: MajorService) { }

  ngOnInit() {
    this.majors$ = this.majorService.getMajors();
  }

}
