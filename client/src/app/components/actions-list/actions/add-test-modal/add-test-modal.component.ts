import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddTest } from 'src/app/_models/AddTest';
import { TestsService } from 'src/app/_services/tests.service';

@Component({
  selector: 'app-add-test-modal',
  templateUrl: './add-test-modal.component.html',
  styleUrls: ['./add-test-modal.component.css']
})
export class AddTestModalComponent implements OnInit {
  modalRef: BsModalRef;
  newTest: AddTest = {
    name: "",
    testLinkTest: "",
    tags: []
  };
  config = {
    class: "modal-lg",
    ignoreBackdropClick: true,
  }

  constructor(private modalService: BsModalService, private testService: TestsService) {
    modalService.config.class
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  onSubmit(form: NgForm) {
    this.newTest.name = form.value.name;
    this.newTest.testLinkTest = form.value.testLink;
    this.testService.addTest(this.newTest);
    this.modalRef.hide();
  }

  ngOnInit(): void {
  }

}
