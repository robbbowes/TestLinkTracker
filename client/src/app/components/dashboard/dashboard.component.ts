import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

import { GetTest } from 'src/app/_models/GetTest';
import { TestsService } from 'src/app/_services/tests.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  tests: GetTest[] = [];
  // brokenTests$: Observable<GetTest[]>
  noTestLinkTests: GetTest[];
  brokenTests: GetTest[];
  activated = false;
  private activatedSub: Subscription;

  nameLength: number;
  active = 1;
  filter = new FormControl('');

  constructor(private testService: TestsService) { }
  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }

  ngOnInit(): void {
    this.getTests();
    this.activatedSub = this.testService.obs.subscribe(didActivate => this.activated = didActivate
    )
  }

  @HostListener('window:resize')
  onResize() {
    this.nameLengthChanger()
  }

  nameLengthChanger = () => {
    let innerWidth = window.innerWidth;
    this.nameLength = innerWidth < 768 ? 40 : innerWidth < 1201 ? 60 : 85;
  }

  getTests() {
    this.testService.getTests().subscribe(tests => {
      this.tests = tests;
      this.noTestLinkTests = this.tests.filter(test => test.testLinkTest === "")
      this.brokenTests = this.tests.filter(test => test.breakage)
    })
  }

  searchBroken(text: string): GetTest[] {
    return this.brokenTests.filter(test => {
      const term = text.toLowerCase();
      console.log(term)
      return test.name.toLowerCase().includes(term);
    });
  }

}
