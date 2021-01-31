import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { GetTest } from 'src/app/_models/GetTest';
import { TestsService } from 'src/app/_services/tests.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private testSub: Subscription;
  private brokenSub: Subscription;
  private noTestLinkSub: Subscription;
  // @Input() tests: GetTest[]
  // @Input() brokenTests: GetTest[]
  // @Input() noTestLinkTests: GetTest[]
  tests: GetTest[];
  brokenTests: GetTest[];
  noTestLinkTests: GetTest[];
  // filteredBroken: GetTest[] = [];
  // filteredNoTestLink: GetTest[] = [];
  nameLength: number;
  active = 1;
  filter = new FormControl('');
  searchFilter = '';

  constructor(private testService: TestsService) { }

  ngOnDestroy(): void {
    this.testSub.unsubscribe();
    this.noTestLinkSub.unsubscribe();
    this.brokenSub.unsubscribe();
  }

  ngOnInit(): void {
    this.testService.getTests()
    this.testSub = this.testService.allTests$.subscribe(tests => this.tests = tests)
    this.brokenSub = this.testService.brokenTests$.subscribe(tests => this.brokenTests = tests)
    this.noTestLinkSub = this.testService.noTestLinkTests$.subscribe(tests => this.noTestLinkTests = tests)
  }

  switchTab() {
    // this.filteredBroken = this.brokenTests;
    // this.filteredNoTestLink = this.noTestLinkTests;
    this.nameLengthChanger()
  }

  @HostListener('window:resize')
  onResize() {
    this.nameLengthChanger()
  }

  private nameLengthChanger = () => {
    let innerWidth = window.innerWidth;
    this.nameLength = innerWidth < 768 ? 40 : innerWidth < 1201 ? 60 : 85;
  }

  // filterBrokenTests(event: Event) {
  //   let term = (<HTMLInputElement>event.target).value;
  //   this.filteredBroken = this.brokenTests.filter(test => test.name.toLowerCase().includes(term.toLowerCase()))
  // }

  // filterNoTestLinkTests(event: Event) {
  //   let term = (<HTMLInputElement>event.target).value;
  //   this.filteredNoTestLink = this.noTestLinkTests.filter(test => test.name.toLowerCase().includes(term.toLowerCase()))
  // }

  // searchBroken(text: string): GetTest[] {
  //   return this.brokenTests.filter(test => test.name.toLowerCase().includes(text.toLowerCase()));
  // }

  // searchNoTestLink(text: string): GetTest[] {
  //   return this.noTestLinkTests.filter(test => test.name.toLowerCase().includes(text.toLowerCase()));
  // }

}
