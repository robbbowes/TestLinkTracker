import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions-list',
  templateUrl: './actions-list.component.html',
  styleUrls: ['./actions-list.component.css']
})
export class ActionsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openAddTestModal() {
    console.log("Test clicked!")
  }

  openAddTestsModal() {
    console.log("Tests clicked!")
  }

  openAddUserModal() {
    console.log("User clicked!")
  }

}
