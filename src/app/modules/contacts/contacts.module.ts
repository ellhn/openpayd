import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactsRoutingModule } from './contacts-routing.module';
import { CustomMaterialModule } from '../custom-material/custom-material.module';

import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { AddressManagerComponent } from './components/address-manager/address-manager.component';

import { ContactsListResolver } from './guards/contacts-list.resolver';
import { AddressResolver } from './guards/address.resolver';
import { AddContactFormGeneratorService } from './services/add-contact-form-generator.service';
import { AddEditAddressFormGeneratorService } from './services/add-edit-address-form-generator.service';
import { SharedService } from './services/shared.service';
import { AddEditAddressComponent } from './components/add-edit-address/add-edit-address.component';



@NgModule({
  declarations: [ContactsListComponent, AddContactComponent, AddressManagerComponent, AddEditAddressComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    ContactsRoutingModule
  ],
  providers: [ContactsListResolver, AddressResolver, AddContactFormGeneratorService, AddEditAddressFormGeneratorService, SharedService]
})
export class ContactsModule { } 
