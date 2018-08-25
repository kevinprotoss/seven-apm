import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { CollegeService } from '../college.service';

@Component({
  selector: 'app-colleges',
  templateUrl: './colleges.component.html',
  styleUrls: ['./colleges.component.css']
})
export class CollegesComponent implements OnInit {
  faSearch = faSearch;
  colleges: any[];

  constructor(private collegeService: CollegeService) { }

  ngOnInit() {
    this.getColleges();
  }
  
  getColleges(): void {
    this.collegeService.getColleges()
      .subscribe(colleges => this.colleges = colleges );
  }

}
