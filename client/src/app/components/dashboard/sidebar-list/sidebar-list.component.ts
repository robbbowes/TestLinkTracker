import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetTest } from 'src/app/_models/GetTest';

@Component({
  selector: 'app-sidebar-list',
  templateUrl: './sidebar-list.component.html',
  styleUrls: ['./sidebar-list.component.css']
})
export class SidebarListComponent implements OnInit {
  @Input() allTests: GetTest[];
  @Input() brokenTests: GetTest[];
  @Input() noTestLinkTests: GetTest[];

  constructor() { }

  ngOnInit(): void {
  }

}
