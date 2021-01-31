import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionsListComponent } from './components/actions-list/actions-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TestDetailComponent } from './components/tests/test-detail/test-detail.component';
import { TestsListComponent } from './components/tests/tests-list/tests-list.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "tests/:id", component: TestDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
