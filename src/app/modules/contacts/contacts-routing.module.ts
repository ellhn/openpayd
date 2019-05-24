import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ContactsListResolver } from "./guards/contacts-list.resolver";


const routes: Routes = [
  {
    path: '',
    component: ContactsListComponent,
    resolve: { contacts: ContactsListResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
