import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GetTest } from 'src/app/_models/GetTest';
import { TestsService } from 'src/app/_services/tests.service';

@Component({
  selector: 'app-sidebar-list',
  templateUrl: './sidebar-list.component.html',
  styleUrls: ['./sidebar-list.component.css']
})
export class SidebarListComponent implements OnInit {
  private testSub: Subscription;
  private brokenSub: Subscription;
  private noTestLinkSub: Subscription;
  // @Input() tests: GetTest[]
  // @Input() brokenTests: GetTest[]
  // @Input() noTestLinkTests: GetTest[]
  allTests: GetTest[];
  brokenTests: GetTest[];
  noTestLinkTests: GetTest[];

  constructor(private testService: TestsService) { }

  ngOnDestroy(): void {
    this.testSub.unsubscribe();
    this.noTestLinkSub.unsubscribe();
    this.brokenSub.unsubscribe();
  }

  ngOnInit(): void {
    this.testService.getTests()
    this.testSub = this.testService.allTests$.subscribe(tests => this.allTests = tests)
    this.brokenSub = this.testService.brokenTests$.subscribe(tests => this.brokenTests = tests)
    this.noTestLinkSub = this.testService.noTestLinkTests$.subscribe(tests => this.noTestLinkTests = tests)
  }

}
