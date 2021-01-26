import { Component, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
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
    private testService: TestsService) {
    modalService.config.class
  }

  filter(): void {
    this.filteredTests = this.tests.filter(test => {
      console.log(test)
      return test.name.toLowerCase().indexOf(this.searchFilter.toLowerCase()) !== -1
    })
    console.log(this.filteredTests)
  }

  openModal(template: TemplateRef<any>) {
    this.searchFilter = "";
    this.modalRef = this.modalService.show(template, this.config);
    this.testService.getTests().subscribe(tests => {
      this.tests = tests;
      this.filteredTests = tests;
    })
  }

  onSubmit(form: NgForm) {
    this.newBreakage.testId = +form.value.testSelect;
    this.newBreakage.info = form.value.info;
    this.newBreakage.ticket = form.value.ticket;
    this.breakageService.addBreakage(this.newBreakage).subscribe(response => {
    // console.log(form)
    console.log(form.value.testSelect)
    });
    this.modalRef.hide();
  }

  ngOnInit(): void {
  }

}
