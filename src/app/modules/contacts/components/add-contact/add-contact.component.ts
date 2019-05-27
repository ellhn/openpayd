import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AddContactFormGeneratorService } from '../../services/add-contact-form-generator.service';
import { ApiRequestService } from '../../../../services/api-request.service';

import { ContactModel } from '../../../../shared/models/contact.model';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  @Input()
  numOfContacts: number;
  @Output()
  changeVisibility = new EventEmitter();
  @Output()
  triggerApi = new EventEmitter();
  fgAddForm: AbstractControl;
  contactModel = new ContactModel();

  get firstName() { return this.fgAddForm.get('firstName'); }
  get lastName() { return this.fgAddForm.get('lastName'); }
  get avatarUrl() { return this.fgAddForm.get('avatarUrl'); }

  constructor(
    private addContactFormGeneratorService: AddContactFormGeneratorService,
    private apiRequestService: ApiRequestService,
    private router: Router
  ) {
    this.fgAddForm = this.addContactFormGeneratorService.addForm;
  }

  ngOnInit() {
    this.firstName.setValue('');
    this.lastName.setValue('');
    this.avatarUrl.setValue('http://');
  }

  cancelAction() {
    this.changeVisibility.emit();
  }

  addContact() {
    this.contactModel.id = this.numOfContacts + 1;
    this.contactModel.first_name = this.fgAddForm.value.firstName;
    this.contactModel.last_name = this.fgAddForm.value.lastName;
    this.contactModel.avatar = this.fgAddForm.value.avatarUrl;

    this.apiRequestService.addContact(this.contactModel).subscribe(
      () => {
        this.changeVisibility.emit();
        this.triggerApi.emit();
      },
      () => this.router.navigate(['/error-page'])
    );
  }

}
