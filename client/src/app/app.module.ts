import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal/';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ActionsListComponent } from './components/actions-list/actions-list.component';
import { AddTestModalComponent } from './components/actions-list/actions/add-test-modal/add-test-modal.component';
import { AddTestsModalComponent } from './components/actions-list/actions/add-tests-modal/add-tests-modal.component';
import { AddUserModalComponent } from './components/actions-list/actions/add-user-modal/add-user-modal.component';
import { TestsListComponent } from './components/tests/tests-list/tests-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NameShortenPipe } from './_pipes/name-shorten.pipe';
import { TestDetailComponent } from './components/tests/test-detail/test-detail.component';
import { AddBreakageModalComponent } from './components/actions-list/actions/add-breakage-modal/add-breakage-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ActionsListComponent,
    AddTestModalComponent,
    AddTestsModalComponent,
    AddUserModalComponent,
    TestsListComponent,
    DashboardComponent,
    NameShortenPipe,
    TestDetailComponent,
    AddBreakageModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    ModalModule,
    TabsModule
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
