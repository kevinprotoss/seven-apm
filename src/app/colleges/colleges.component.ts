import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { chunk } from 'lodash';

import { College } from '../college';
import { CollegeService } from '../college.service';

@Component({
  selector: 'app-colleges',
  templateUrl: './colleges.component.html',
  styleUrls: ['./colleges.component.css']
})
export class CollegesComponent implements OnInit {
  faSearch = faSearch;
  private _colleges$: Observable<College[]>;
  private _collegesInUS$: Observable<College[][]>;
  private _collegesInUK$: Observable<College[][]>;
  private _collegesInRest$: Observable<College[][]>;
  region: string = 'us';
  pageSize: number = 4;
  currentPage: number = 0;

  constructor(private collegeService: CollegeService) { }

  ngOnInit() {
    this.colleges$ = this.collegeService.getColleges();
  }
  
  set colleges$(values$: Observable<College[]>) {
    this._colleges$ = values$;
    this._collegesInUS$ = values$.pipe(
      map(colleges => colleges.filter(college => college.country === 'us')),
      map(colleges => chunk(colleges, this.pageSize))
    );
    this._collegesInUK$ = values$.pipe(
      map(colleges => colleges.filter(college => college.country === 'uk')),
      map(colleges => chunk(colleges, this.pageSize))
    );
    this._collegesInRest$ = values$.pipe(
      map(colleges => colleges.filter(college => college.country !== 'us' && college.country !== 'uk')),
      map(colleges => chunk(colleges, this.pageSize))
    );
  }
  
  get pagedColleges$(): Observable<College[][]> {
    switch(this.region) {
      case 'rest':
        return this._collegesInRest$;
      case 'uk':
        return this._collegesInUK$;
      case 'us':
      default:
        return this._collegesInUS$;
    }
  }

  selectRegion(region: string) {
    this.region = region;
    this.currentPage = 0;
  }
}
