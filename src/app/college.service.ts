import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { College } from './college';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {
  
  private url = './assets/data/colleges.json';

  constructor(private http: HttpClient) { }
  
  getColleges(): Observable<College[]> {
    return this.http.get<College[]>(this.url).pipe(
      map(colleges => colleges.map(data => new College(data)))
    );
  }
  
  getCollege(id: string): Observable<College> {
    return this.getColleges().pipe(
      map(colleges => colleges.find(college => college.id === id))
    );
  }
}
