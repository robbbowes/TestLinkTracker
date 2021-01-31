import { Component, Input, OnInit } from '@angular/core';
import { GetTest } from 'src/app/_models/GetTest';

@Component({
  selector: 'app-tests-table',
  templateUrl: './tests-table.component.html',
  styleUrls: ['./tests-table.component.css']
})
export class TestsTableComponent implements OnInit {
  @Input() tests: GetTest[];
  @Input() testNameLength: number;
  @Input() icon: string;

  constructor() { }

  ngOnInit(): void {
  }

}
