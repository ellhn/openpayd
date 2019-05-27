import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { AddressManagerComponent } from './components/address-manager/address-manager.component';
import { ContactsListResolver } from './guards/contacts-list.resolver';
import { AddressResolver } from './guards/address.resolver';


const routes: Routes = [
  {
    path: '',
    component: ContactsListComponent,
    resolve: { contacts: ContactsListResolver }
  },
  {
    path: 'address-manager',
    component: AddressManagerComponent,
    resolve: { addresses: AddressResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
