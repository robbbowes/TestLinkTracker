import { Component, HostListener, OnInit } from '@angular/core';
import { GetTest } from 'src/app/_models/GetTest';
import { TestsService } from 'src/app/_services/tests.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tests: GetTest[] = [];
  noTestLinkTests: GetTest[];
  brokenTests: GetTest[];
  nameLength: number;

  constructor(private testService: TestsService) { }

  ngOnInit(): void {
    this.testService.getTests().subscribe(tests => {
      this.tests = tests;
      this.noTestLinkTests = this.tests.filter(test => test.testLinkTest === "")
      this.brokenTests = this.tests.filter(test => test.breakage)
    })
  }

  @HostListener('window:resize')
  onResize() {
    let innerWidth = window.innerWidth;
    this.nameLength = innerWidth < 768 ? 40 : innerWidth < 1201 ? 60 : 85;
  }

}
