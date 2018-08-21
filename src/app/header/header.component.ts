import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser'
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public backgroundImg: SafeStyle;
  headlineText: string;
  data: Object = {
    home: {
      text: '',
      image: 'url(./assets/img/header/home.jpg)'
    },
    courses: {
      text: ``,
      image: 'url(./assets/img/header/courses.jpg)'
    },
    courseDetail: {
      text: ``,
      image: 'url(./assets/img/header/course-detail.jpg)'
    },
    tutors: {
      text: `<h1 style="padding-top: 11em; padding-left: 6em; color: white;">
              WE ARE 7APM. MORE THAN
              <br>
              <u style="text-decoration: underline #ffff6a;">A</u>N EDUCATIONAL INSTITUTION.
            </h1>`,
      image: 'url(./assets/img/header/tutors.jpg)'
    },
    tutorDetail: {
      text: ``,
      image: 'url(./assets/img/header/tutor-detail.jpg)'
    },
    colleagues: {
      text: `<h1 style="padding-top: 8em; padding-left: 6em; color: #3e3e96;">
              MASTER OF ART. 7APM
              <br>
              <u style="text-decoration: underline #ffff6a;">A</u>CTION IS THE FOUNDATIONALKEY.
              <br>
              TO ALL SUCCESS.
              <br>
              ---- PABLO PICASSO
            </h1>`,
      image: 'url(./assets/img/header/colleagues.jpg)'
    },
    colleagueDetail: {
      text: ``,
      image: 'url(./assets/img/header/colleague-detail.jpg)'
    },
    majors: {
      text: ``,
      image: 'url(./assets/img/header/majors.jpg)'
    },
    majorDetail: {
      text: ``,
      image: 'url(./assets/img/header/major-detail.jpg)'
    },
    consulting: {
      text: ``,
      image: 'url(./assets/img/header/consulting.jpg)'
    },
    aboutUs: {
      text: ``,
      image: 'url(./assets/img/header/about-us.jpg)'
    }
  };
  
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
    ).subscribe((event) => {
      this.headlineText = this.data[event.name].text;
      this.backgroundImg  = this.sanitizer.bypassSecurityTrustStyle(this.data[event.name].image);
    });
  }

}
