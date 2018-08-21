import { Injectable } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Injectable({
  providedIn: 'root'
})
export class PageScrollService {

  constructor(private scrollToService: ScrollToService) { }
  
  public triggerScrollTo(destination: string) {
    this.scrollToService.scrollTo({
      target: destination
    });
  }
  
}
