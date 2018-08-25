import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as numeral from 'numeral';

import { College } from '../college';
import { CollegeService } from '../college.service';

// Add locale support for USA
numeral.register('locale', 'en-us', {
  delimiters: {
    thousands: ',',
    decimal: '.'
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't'
  },
  ordinal: function (number) {
    var b = number % 10;
    return (~~ (number % 100 / 10) === 1) ? 'th' :
        (b === 1) ? 'st' :
        (b === 2) ? 'nd' :
        (b === 3) ? 'rd' : 'th';
  },
  currency: {
    symbol: '$'
  }
});

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

  format(number) {
    return numeral(number).format('$0,0.00');
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.college$ = this.collegeService.getCollege(id).pipe(
      map(college => {
        console.log(college);
        college.bachelorMajors = college.majors.filter(major => major.degree === 'bachelor');
        college.masterMajors = college.majors.filter(major => major.degree === 'master');
        numeral.locale(college.tuition.currency);
        college.tuition.totalFee = college.tuition.fees
          .map(fee => fee.price)
          .reduce((a, b) => a + b, 0);
        return college;
      })
    );
  }

}
