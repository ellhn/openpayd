import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

import { ApiRequestService } from '../../../../services/api-request.service';
import { AddEditAddressFormGeneratorService } from '../../services/add-edit-address-form-generator.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-address-manager',
  templateUrl: './address-manager.component.html',
  styleUrls: ['./address-manager.component.scss']
})
export class AddressManagerComponent implements OnInit {
  addresses: any;
  addAddressVisible = false;
  addButtonVisible = false;
  updateButtonVisible = false;
  displayedColumns = ['street1', 'street2', 'town', 'country', 'edit', 'delete'];
  fgAddEditForm: AbstractControl;

  get street1() { return this.fgAddEditForm.get('street1'); }
  get street2() { return this.fgAddEditForm.get('street2'); }
  get town() { return this.fgAddEditForm.get('town'); }
  get country() { return this.fgAddEditForm.get('country'); }

  constructor(
    public sharedService: SharedService,
    private addEditAddressFormGeneratorService: AddEditAddressFormGeneratorService,
    private apiRequestService: ApiRequestService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.fgAddEditForm = this.addEditAddressFormGeneratorService.addEditForm;
  }

  ngOnInit() {
    this.addresses = this.route.snapshot.data.addresses;
  }

  editAddress(address) {
    this.addAddressVisible = true;
    this.updateButtonVisible = true;
    this.sharedService.addressId = address.id;
    this.street1.setValue(address.street1);
    this.street2.setValue(address.street2);
    this.town.setValue(address.town);
    this.country.setValue(address.country);
  }

  deleteAddress(address) {
    if (confirm('Are you sure you want to delete this entry?')) {
      this.apiRequestService.deleteAddress(address.id)
      .pipe(
        switchMap(() =>
          this.apiRequestService.getAddresses(this.sharedService.selectedContact.id)
        )
      )
      .subscribe(
        data => this.addresses = data,
        () => this.router.navigate(['/error-page'])
      );
    }
  }

  changeVisibility() {
    this.addAddressVisible = false;
    this.addButtonVisible = false;
    this.updateButtonVisible = false;
  }

  triggerApi() {
    this.apiRequestService.getAddresses(this.sharedService.selectedContact.id).subscribe(data => this.addresses = data);
  }

  newAddress() {
    this.addAddressVisible = true;
    this.addButtonVisible = true;
  }

  goToContactsList() {
    this.router.navigate(['/contacts-list']);
  }
}
