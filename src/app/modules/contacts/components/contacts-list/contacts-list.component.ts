import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiRequestService } from '../../../../services/api-request.service';
import { SharedService } from '../../services/shared.service';

@Component({
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  contacts: any;
  addContactVisible = false;
  displayedColumns = ['first-name', 'last-name'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiRequestService: ApiRequestService,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.contacts = this.route.snapshot.data.contacts;
  }

  newContact(): void {
    this.addContactVisible = true;
  }

  goToMain(): void {
    this.router.navigate(['']);
  }

  changeVisibility() {
    this.addContactVisible = false;
  }

  triggerApi() {
    this.apiRequestService.getContacts().subscribe(data => this.contacts = data);
  }

  selectRow(row) {
    const currentContact = {
      id: row.id,
      first_name: row.first_name,
      last_name: row.last_name,
      avatar: row.avatar
    }
    this.sharedService.selectedContact = currentContact;
    this.router.navigate(['/contacts-list/address-manager']);
  }
}
