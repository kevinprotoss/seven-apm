import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { chunk } from 'lodash';

import { College } from '../college';
import { CollegeService } from '../college.service';
import { PageScrollService } from '../page-scroll.service';

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
  pageSize: number = 4;
  currentPage: number = 0;
  swiper: any;
  realIndex: number = 0;
  
  index: number = 0;

  constructor(
    private collegeService: CollegeService,
    private pageScrollService: PageScrollService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.colleges$ = this.collegeService.getColleges();
    this.route.queryParams.subscribe(params => {
      switch (params.country) {
        case 'rest':
          this.realIndex = 2;
          break;
        case 'uk':
          this.realIndex = 1;
          break;
        case 'us':
        default:
          this.realIndex = 0;
          break;
      }
      const swiper = new Swiper('.maps', {
        initialSlide: this.realIndex,
        loop: true,
        // effect: 'fade'
      });
      swiper.on('slideChange', () => {
        this.realIndex = swiper.realIndex;
        this.currentPage = 0;
        this.index = 0;
      });
      this.swiper = swiper;
    });
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
    switch(this.realIndex) {
      case 2:
        return this._collegesInRest$;
      case 1:
        return this._collegesInUK$;
      case 0:
      default:
        return this._collegesInUS$;
    }
  }

  slideToLoop(index: number) {
    this.swiper.slideToLoop(index);
  }
  
  gotoPage(page: number) {
    this.currentPage = page;
    this.pageScrollService.triggerScrollTo('#college-page');
  }
  
  nextPage() {
    // this.currentPage += 1;
    this.index += 1;
    this.gotoPage(this.index);
    this.pageScrollService.triggerScrollTo('#college-page');
  }
  
  previousPage() {
    // this.currentPage -= 1;
    this.index -= 1;
    this.gotoPage(this.index);
    this.pageScrollService.triggerScrollTo('#college-page');
  }

  // slide(total: number, offset: number) {
  //   console.log('slide');
  //   this.index = Math.min( Math.max( this.index + offset, 0 ), total - 1 );
  //   this.gotoPage(this.index);
  // }
}
