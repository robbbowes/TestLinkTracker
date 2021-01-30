import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetTest } from '../_models/GetTest';

import { map } from 'rxjs/operators'
import { AddTest } from '../_models/AddTest';

@Injectable({
  providedIn: 'root'
})
export class TestsService {
  baseUrl = environment.apiUrl;
  tests: GetTest[] = [];
  obs = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  getTests() {
    // if (this.tests.length > 0) return of(this.tests)
    return this.http.get<GetTest[]>(this.baseUrl + 'tests').pipe(
      map(tests => {
        this.tests = tests;
        return tests;
      })
    )
  }

  getTest(id: number) {
    // const test = this.tests.find(t => t.id === id);
    // if (test !== undefined) return of(test);
    return this.http.get<GetTest>(this.baseUrl + 'tests/' + id);
  }

  addTest(newTest: AddTest) {
    return this.http.post<GetTest[]>(this.baseUrl + 'tests', newTest);
  }

}
