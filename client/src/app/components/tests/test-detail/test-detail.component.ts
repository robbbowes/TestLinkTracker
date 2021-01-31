import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { GetTest } from 'src/app/_models/GetTest';
import { TestsService } from 'src/app/_services/tests.service';

@Component({
  selector: 'app-test-detail',
  templateUrl: './test-detail.component.html',
  styleUrls: ['./test-detail.component.css']
})
export class TestDetailComponent implements OnInit {
  test: GetTest;
  isCollapsed = false;

  constructor(private route: ActivatedRoute, private testService: TestsService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.testService.getTest(id).subscribe(test => this.test = test);
    this.route.params.subscribe((params: Params) => {
      this.testService.getTest(+params['id']).subscribe(test => this.test = test)
    });
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

}
