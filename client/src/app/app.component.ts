import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from './_models/Test';
import { TestsService } from './_services/tests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TestLinkTracker';
  tests: Test[];

  constructor(private testService: TestsService) { }

  ngOnInit() {
    this.testService.getTests().subscribe(tests => {
      this.tests = tests;
    });
  }
}
