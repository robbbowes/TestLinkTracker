import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-test-modal',
  templateUrl: './add-test-modal.component.html',
  styleUrls: ['./add-test-modal.component.css']
})
export class AddTestModalComponent implements OnInit {
  modalRef: BsModalRef;
  config = {
    class: "modal-lg",
    ignoreBackdropClick: true,
  }

  constructor(private modalService: BsModalService) {
    modalService.config.class
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  submit() {
    this.modalRef.hide();
  }

  ngOnInit(): void {
  }

}
