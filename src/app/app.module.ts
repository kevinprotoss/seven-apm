import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgxSpinnerModule } from 'ngx-spinner';

import { SafeHtmlPipe } from './safe-html.pipe';
import { PaginationPipe } from './pagination.pipe';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TutorsComponent } from './tutors/tutors.component';
import { TutorDetailComponent } from './tutor-detail/tutor-detail.component';
import { FooterComponent } from './footer/footer.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { HeaderComponent } from './header/header.component';
import { CollegesComponent } from './colleges/colleges.component';
import { CollegeDetailComponent } from './college-detail/college-detail.component';
import { MajorsComponent } from './majors/majors.component';
import { MajorDetailComponent } from './major-detail/major-detail.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InfoComponent } from './info/info.component';
import { FabComponent } from './fab/fab.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TutorsComponent,
    TutorDetailComponent,
    FooterComponent,
    PromotionsComponent,
    HeaderComponent,
    CollegesComponent,
    CollegeDetailComponent,
    MajorsComponent,
    MajorDetailComponent,
    CoursesComponent,
    CourseDetailComponent,
    AboutUsComponent,
    SafeHtmlPipe,
    PaginationPipe,
    InfoComponent,
    FabComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgxSpinnerModule,
    ScrollToModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
