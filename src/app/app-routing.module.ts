import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { TutorsComponent } from './tutors/tutors.component';
import { TutorDetailComponent } from './tutor-detail/tutor-detail.component';
import { CollegesComponent } from './colleges/colleges.component';
import { CollegeDetailComponent } from './college-detail/college-detail.component';
import { MajorsComponent } from './majors/majors.component';
import { MajorDetailComponent } from './major-detail/major-detail.component';
import { ConsultingComponent } from './consulting/consulting.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { name: 'home' } },
  { path: 'tutors', component: TutorsComponent, data: { name: 'tutors' } },
  { path: 'tutors/:id', component: TutorDetailComponent, data: { name: 'tutorDetail' } },
  { path: 'courses', component: CoursesComponent, data: { name: 'courses' } },
  { path: 'courses/detail', component: CourseDetailComponent, data: { name: 'courseDetail' } },
  { path: 'colleges', component: CollegesComponent, data: { name: 'colleges' } },
  { path: 'colleges/:id', component: CollegeDetailComponent, data: { name: 'collegeDetail' } },
  { path: 'majors', component: MajorsComponent, data: { name: 'majors' } },
  { path: 'majors/:id', component: MajorDetailComponent, data: { name: 'majorDetail' } },
  { path: 'consulting', component: ConsultingComponent, data: { name: 'consulting' } },
  { path: 'about-us', component: AboutUsComponent, data: { name: 'aboutUs' } }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
