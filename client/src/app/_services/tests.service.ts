import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Test } from '../_models/Test';

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TestsService {
  baseUrl = environment.apiUrl;
  tests: Test[] = [];

  constructor(private http: HttpClient) { }

  getTests() {
    if (this.tests.length > 0) return of(this.tests)
    return this.http.get<Test[]>(this.baseUrl + 'tests').pipe(
      map(tests => {
        this.tests = tests;
        return tests;
      })
    )
  }

  getTest(name: string) {
    const test = this.tests.find(t => t.name === name);
    if (test !== undefined) return of(test);
    return this.http.get<Test>(this.baseUrl + 'tests/' + name);
  }

  
}
