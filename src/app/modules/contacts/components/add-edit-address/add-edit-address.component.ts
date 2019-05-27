import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { AddEditAddressFormGeneratorService } from '../../services/add-edit-address-form-generator.service';
import { ApiRequestService } from '../../../../services/api-request.service';
import { SharedService } from '../../services/shared.service';

import { AddressModel } from '../../../../shared/models/address.model';
import { countries } from '../../../../shared/constants/countries';


@Component({
  selector: 'app-add-edit-address',
  templateUrl: './add-edit-address.component.html',
  styleUrls: ['./add-edit-address.component.scss']
})
export class AddEditAddressComponent implements OnInit {

  @Input()
  addButtonVisible: boolean;
  @Input()
  updateButtonVisible: boolean;
  @Output()
  changeVisibility = new EventEmitter();
  @Output()
  triggerApi = new EventEmitter();
  fgAddEditForm: AbstractControl;
  countries: any;
  addressModel = new AddressModel();

  get street1() { return this.fgAddEditForm.get('street1'); }
  get street2() { return this.fgAddEditForm.get('street2'); }
  get town() { return this.fgAddEditForm.get('town'); }
  get country() { return this.fgAddEditForm.get('country'); }

  constructor(
    private addEditAddressFormGeneratorService: AddEditAddressFormGeneratorService,
    private apiRequestService: ApiRequestService,
    private sharedService: SharedService,
    private router: Router
  ) {
    this.fgAddEditForm = this.addEditAddressFormGeneratorService.addEditForm;
  }

  ngOnInit() {
    this.countries = countries;
  }

  clearControls() {
    this.street1.setValue('');
    this.street2.setValue('');
    this.town.setValue('');
    this.country.setValue('');
  }

  cancelAction() {
    this.changeVisibility.emit();
    this.clearControls();
  }

  addAddress() {
    this.apiRequestService.getAllAddresses()
    .pipe(
      switchMap(data => {
        this.addressModel.id = data['length'] + 1;
        this.addressModel.street1 = this.fgAddEditForm.value.street1;
        this.addressModel.street2 = this.fgAddEditForm.value.street2;
        this.addressModel.town = this.fgAddEditForm.value.town;
        this.addressModel.country = this.fgAddEditForm.value.country;
        return this.apiRequestService.addAddress(this.addressModel, this.sharedService.selectedContact.id);
      })
    )
    .subscribe(
      () => {
        this.changeVisibility.emit();
        this.triggerApi.emit();
        this.clearControls();
      },
      () => this.router.navigate(['/error-page'])
    );
  }

  updateAddress() {
    this.addressModel.id = this.sharedService.addressId;
    this.addressModel.contactId = this.sharedService.selectedContact.id;
    this.addressModel.street1 = this.fgAddEditForm.value.street1;
    this.addressModel.street2 = this.fgAddEditForm.value.street2;
    this.addressModel.town = this.fgAddEditForm.value.town;
    this.addressModel.country = this.fgAddEditForm.value.country;

    this.apiRequestService.updateAddress(this.addressModel, this.sharedService.addressId).subscribe(
      () => {
        this.changeVisibility.emit();
        this.triggerApi.emit();
        this.clearControls();
      },
      () => this.router.navigate(['/error-page'])
    );
  }

}
