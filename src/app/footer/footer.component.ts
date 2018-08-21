import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public backgroundImg: SafeStyle;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.backgroundImg = this.sanitizer.bypassSecurityTrustStyle('url(./assets/img/footer/bg.jpg)');
  }
  
  getIframeSrc(){
    return this.sanitizer.bypassSecurityTrustResourceUrl('./assets/map.html');
  }

}
