import { Component, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { filter, map } from 'rxjs/operators';
import { AddBreakage } from 'src/app/_models/AddBreakage';
import { AddTest } from 'src/app/_models/AddTest';
import { GetTest } from 'src/app/_models/GetTest';
import { BreakagesService } from 'src/app/_services/breakages.service';
import { TestsService } from 'src/app/_services/tests.service';

@Component({
  selector: 'app-add-breakage-modal',
  templateUrl: './add-breakage-modal.component.html',
  styleUrls: ['./add-breakage-modal.component.css']
})
export class AddBreakageModalComponent implements OnInit {
  modalRef: BsModalRef;
  newBreakage: AddBreakage = { info: "", ticket: "", testId: null };
  config = { class: "modal-lg", ignoreBackdropClick: true, }
  searchFilter: string = "";
  tests: GetTest[] = [];
  filteredTests: GetTest[] = [];

  constructor(
    private modalService: BsModalService,
    private breakageService: BreakagesService,
    private testService: TestsService,
    private router: Router) {
    modalService.config.class
  }

  filter(): void {
    this.filteredTests = this.tests.filter(
      test => test.name.toLowerCase().indexOf(this.searchFilter.toLowerCase()) !== -1
    )
  }

  openModal(template: TemplateRef<any>) {
    this.searchFilter = "";
    this.modalRef = this.modalService.show(template, this.config);
    this.testService.getTests().subscribe(tests => {
      this.tests = tests.filter(test => !test.breakage)
      this.filteredTests = this.tests;
    })
  }

  onSubmit(form: NgForm) {
    this.newBreakage.testId = +form.value.testSelect;
    this.newBreakage.info = form.value.info;
    this.newBreakage.ticket = form.value.ticket;
    this.breakageService.addBreakage(this.newBreakage);
    this.modalRef.hide();
  }

  ngOnInit(): void {
  }

}
