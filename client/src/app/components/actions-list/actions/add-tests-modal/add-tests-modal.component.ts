import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-tests-modal',
  templateUrl: './add-tests-modal.component.html',
  styleUrls: ['./add-tests-modal.component.css']
})
export class AddTestsModalComponent implements OnInit {
  modalRef: BsModalRef;
  config = {
    class: "modal-lg"
  }

  constructor(private modalService: BsModalService) {
    modalService.config.class
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  ngOnInit(): void {
  }

  submit() {
    this.modalRef.hide();
  }

}
