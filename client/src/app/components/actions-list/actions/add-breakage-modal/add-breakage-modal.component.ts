import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { AddBreakage } from 'src/app/_models/AddBreakage';
import { AddTest } from 'src/app/_models/AddTest';
import { GetTest } from 'src/app/_models/GetTest';
// import { BreakagesService } from 'src/app/_services/breakages.service';
import { TestsService } from 'src/app/_services/tests.service';

@Component({
  selector: 'app-add-breakage-modal',
  templateUrl: './add-breakage-modal.component.html',
  styleUrls: ['./add-breakage-modal.component.css']
})
export class AddBreakageModalComponent implements OnInit, OnDestroy {
  modalRef: BsModalRef;
  tests: GetTest[];
  model: GetTest;
  newBreakage: AddBreakage = { 
    info: "", ticket: "", testId: null 
  };
  config = { 
    class: "modal-lg", ignoreBackdropClick: true
  }
  private testSub: Subscription;

  constructor(
    private modalService: BsModalService,
    private testService: TestsService) {
    modalService.config.class
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.testSub.unsubscribe();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
    this.testService.getTests()
    this.testSub = this.testService.allTests$.subscribe(tests => this.tests = tests)
  }

  formatter = (test: GetTest) => test.name;

  search = (text$: Observable<string>) => text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    filter(term => term.length >= 2),
    map(term => this.tests.filter(test => new RegExp(term, 'mi').test(test.name)).slice(0, 10))
  )

  onSubmit(form: NgForm) {
    this.newBreakage.testId = +form.value.testSelect.id
    this.newBreakage.info = form.value.info;
    this.newBreakage.ticket = form.value.ticket;
    this.testService.addBreakage(this.newBreakage);
    this.modalRef.hide();
  }

}
