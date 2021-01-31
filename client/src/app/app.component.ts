import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetTest } from './_models/GetTest';
import { TestsService } from './_services/tests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TestLinkTracker';

  constructor() { }

  ngOnInit() { }

}
