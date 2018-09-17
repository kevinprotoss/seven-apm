import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PageScrollService } from '../page-scroll.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

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
