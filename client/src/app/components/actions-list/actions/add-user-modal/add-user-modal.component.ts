import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.css']
})
export class AddUserModalComponent implements OnInit {
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
