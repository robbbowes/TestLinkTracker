import { Component, Input, OnInit } from '@angular/core';
import { GetTest } from 'src/app/_models/GetTest';

@Component({
  selector: 'app-test-detail',
  templateUrl: './test-detail.component.html',
  styleUrls: ['./test-detail.component.css']
})
export class TestDetailComponent implements OnInit {
  @Input() test: GetTest;

  constructor() { }

  ngOnInit(): void {
  }

}
