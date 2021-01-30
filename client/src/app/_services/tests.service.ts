import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetTest } from '../_models/GetTest';

import { map } from 'rxjs/operators'
import { AddTest } from '../_models/AddTest';
import { AddBreakage } from '../_models/AddBreakage';

@Injectable({
  providedIn: 'root'
})
export class TestsService {
  baseUrl = environment.apiUrl;
  // tests: GetTest[] = [];
  obs = new Subject<boolean>();

  allTests$ = new Subject<GetTest[]>();
  brokenTests$ = new Subject<GetTest[]>();
  noTestLinkTests$ = new Subject<GetTest[]>();

  constructor(private http: HttpClient) { }

  getTests() {
    return this.http.get<GetTest[]>(this.baseUrl + 'tests').subscribe(
      tests => this.updateTests(tests)
      // {
      //   this.allTests$.next(tests);
      //   this.brokenTests$.next(tests.filter(test => test.breakage));
      //   this.noTestLinkTests$.next(tests.filter(test => test.testLinkTest === ""));
      // }
    )
  }

  getTest(id: number) {
    return this.http.get<GetTest>(this.baseUrl + 'tests/' + id);
  }

  addTest(newTest: AddTest) {
    return this.http.post<GetTest[]>(this.baseUrl + 'tests', newTest).subscribe(
      tests => {
        console.log(tests)
        this.updateTests(tests)
      }
    );
  }

  addBreakage(newBreakage: AddBreakage) {
    return this.http.post<GetTest[]>(this.baseUrl + 'breakages', newBreakage).subscribe(
      tests => this.updateTests(tests)
      // {
      //   this.allTests$.next(tests);
      //   this.brokenTests$.next(tests.filter(test => test.breakage));
      //   this.noTestLinkTests$.next(tests.filter(test => test.testLinkTest === ""));
      // }
    );
  }

  updateTests = (tests: GetTest[]) => {
    this.allTests$.next(tests);
    this.brokenTests$.next(tests.filter(test => test.breakage));
    this.noTestLinkTests$.next(tests.filter(test => test.testLinkTest === ""));
  }

}
