import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.css'],
  animations: [
    trigger('visibilityChanged', [
      state('shown', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('shown => hidden', animate('300ms')),
      transition('hidden => shown', animate('300ms')),
    ])
  ]
})
export class FabComponent implements OnInit {
  faChevronUp = faChevronUp;
  visiblityState: string = 'hidden';

  constructor() { }

  ngOnInit() {
  }
  
  @HostListener('window:scroll', ['$event']) 
  onScroll(event) {
    if (window.pageYOffset >= 50) {
      this.visiblityState = 'shown';
    } else {
      this.visiblityState = 'hidden';
    }
  }

}
