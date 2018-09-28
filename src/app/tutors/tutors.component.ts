import { Component, OnInit } from '@angular/core';
import {  trigger,  state,  style,  animate,  transition } from '@angular/animations';

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({
          opacity: 0, 
          height: '*',
          overflow: 'hidden'
        }),
        animate(1000, style({
          opacity: 1,
          height: '*',
          overflow: 'hidden'
        })) 
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(1000, style({
          opacity: 0,
          height: '*',
          overflow: 'hidden'
        })) 
      ])
    ])
  ]
})
export class TutorsComponent implements OnInit {
  slideIndex: number = 1;

  constructor() { }

  ngOnInit() {
    const swiper = new Swiper('.tutors', {
      slidesPerView: 3,
      slidesPerColumn: 2,
      slidesPerGroup: 3,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
