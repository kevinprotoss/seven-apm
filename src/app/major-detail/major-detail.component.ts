import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { camelCase } from 'lodash';

@Component({
  selector: 'app-major-detail',
  templateUrl: './major-detail.component.html',
  styleUrls: ['./major-detail.component.css']
})
export class MajorDetailComponent implements OnInit {
  data: Object = {
    graphicDesign: {
      
    }
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params.id);
    });
    let id = this.route.snapshot.paramMap.get('id');
    let res = this.data[camelCase(id)];
    console.log('res', res);
  }

}
