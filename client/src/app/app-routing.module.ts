import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionsListComponent } from './components/actions-list/actions-list.component';
import { TestsListComponent } from './components/tests/tests-list/tests-list.component';

const routes: Routes = [
  { path: "", component: ActionsListComponent },
  { path: "tests", component: TestsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
