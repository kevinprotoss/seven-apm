import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PageScrollService } from '../page-scroll.service';

@Component({
  selector: 'app-consulting',
  templateUrl: './consulting.component.html',
  styleUrls: ['./consulting.component.css']
})
export class ConsultingComponent implements OnInit {

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
