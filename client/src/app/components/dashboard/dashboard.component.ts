import { Component, HostListener, OnInit } from '@angular/core';
import { Test } from 'src/app/_models/Test';
import { TestsService } from 'src/app/_services/tests.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tests: Test[] = [];
  noTestLinkTests: Test[] = [];
  nameLength: number;

  constructor(private testService: TestsService) { }

  ngOnInit(): void {
    this.testService.getTests().subscribe(tests => {
      this.tests = tests;
      this.tests.forEach(test => {
        if (test.testLinkTest !== "") {
          this.noTestLinkTests.push(test)
        }
      })
      console.log("All tests:", this.tests)
      console.log("Test with missing testlink ids", this.noTestLinkTests)
    })
  }

  @HostListener('window:resize')
  onResize() {
    let innerWidth = window.innerWidth;
    this.nameLength = innerWidth < 768
      ? 40 
      : innerWidth < 1201
        ? 60 
        : 100;
  }

}
