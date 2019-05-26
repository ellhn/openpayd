import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactsRoutingModule } from './contacts-routing.module';
import { CustomMaterialModule } from '../custom-material/custom-material.module';

import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';

import { ContactsListResolver } from './guards/contacts-list.resolver';
import { AddContactFormGeneratorService } from './services/add-contact-form-generator.service';



@NgModule({
  declarations: [ContactsListComponent, AddContactComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    ContactsRoutingModule
  ],
  providers: [ContactsListResolver, AddContactFormGeneratorService]
})
export class ContactsModule { }
