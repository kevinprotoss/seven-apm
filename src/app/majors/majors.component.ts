import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Major } from '../major';
import { MajorService } from '../major.service';

const givenOrder = [
  'graphic-design',
  'stage-design',
  'industrial-design',
  'interaction-design',
  'jewellry-design',
  'fine-art',
  'animation',
  'photography',
  'architecture',
  'interior-design',
  'illustration-design',
  'game-design',
  'art-management',
  'fashion-management',
  'musical-composition',
  'digital-media'
];

const sortByGivenOrder = (a, b) => {
  if (typeof a.id === 'string' &&
    typeof b.id === 'string') {
    if (givenOrder.indexOf(a.id) < givenOrder.indexOf(b.id)) {
      return -1;
    }
    if (givenOrder.indexOf(a.id) > givenOrder.indexOf(b.id)) {
      return 1;
    }
  }
  return 0;
};

@Component({
  selector: 'app-majors',
  templateUrl: './majors.component.html',
  styleUrls: ['./majors.component.css']
})
export class MajorsComponent implements OnInit {
  majors$: Observable<Major[]>;
  
  constructor(private majorService: MajorService) { }

  ngOnInit() {
    this.majors$ = this.majorService.getMajors().pipe(
      map((majors) => {
        return majors.sort(sortByGivenOrder);
      })
    );

  }

}
