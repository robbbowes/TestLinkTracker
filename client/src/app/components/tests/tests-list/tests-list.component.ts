import { Component, OnInit } from '@angular/core';
import { GetTest } from 'src/app/_models/GetTest';
import { TestsService } from 'src/app/_services/tests.service';

@Component({
  selector: 'app-tests-list',
  templateUrl: './tests-list.component.html',
  styleUrls: ['./tests-list.component.css']
})
export class TestsListComponent implements OnInit {
  tests: GetTest[];
  broken: string = "";
  brokenString = "Broken"
  assigned: string = "";
  assignmentString = "Assigned"

  constructor(private testService: TestsService) { }

  ngOnInit(): void {
    // this.testService.getTests().subscribe(tests => {
    //   this.tests = tests;
    //   // this.tests.sort((a,b) => a.name.localeCompare(b.name));
    // });
  }

  toggleBroken() {
    if (this.broken === "") {
      this.broken = "btn-success";
      this.brokenString = "Not broken"
    } else if (this.broken === "btn-success") {
      this.broken = "btn-danger"
      this.brokenString = "Only broken"
    } else {
      this.broken = "";
      this.brokenString = "Broken"
    }
  }

  toggleAssigned() {
    if (this.assigned === "") {
      this.assigned = "btn-success";
      this.assignmentString = "Only Assigned"
    } else if (this.assigned === "btn-success") {
      this.assigned = "btn-danger"
      this.assignmentString = "Not Assigned"
    } else {
      this.assigned = "";
      this.assignmentString = "Assigned"
    }
  }

}
