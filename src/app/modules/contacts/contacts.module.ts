import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsRoutingModule } from './contacts-routing.module';

import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ContactsListResolver } from './guards/contacts-list.resolver';


@NgModule({
  declarations: [ContactsListComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule
  ],
  providers: [ContactsListResolver]
})
export class ContactsModule { }
