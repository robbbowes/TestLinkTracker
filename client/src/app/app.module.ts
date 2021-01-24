import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal/';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ActionsListComponent } from './components/actions-list/actions-list.component';
import { AddTestModalComponent } from './components/actions-list/actions/add-test-modal/add-test-modal.component';
import { AddTestsModalComponent } from './components/actions-list/actions/add-tests-modal/add-tests-modal.component';
import { AddUserModalComponent } from './components/actions-list/actions/add-user-modal/add-user-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ActionsListComponent,
    AddTestModalComponent,
    AddTestsModalComponent,
    AddUserModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    ModalModule
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
