import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { ColleagueService } from '../colleague.service';

@Component({
  selector: 'app-colleagues',
  templateUrl: './colleagues.component.html',
  styleUrls: ['./colleagues.component.css']
})
export class ColleaguesComponent implements OnInit {

  faSearch = faSearch;
  colleagues: any[];
  
  constructor(private colleagueService: ColleagueService) { }

  ngOnInit() {
    this.getColleagues();
  }
  
  getColleagues(): void {
    this.colleagueService.getColleagues()
      .subscribe(colleagues => this.colleagues = colleagues );
  }

}
