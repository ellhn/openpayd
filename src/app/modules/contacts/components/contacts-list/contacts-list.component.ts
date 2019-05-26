import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiRequestService } from '../../../../services/api-request.service';

@Component({
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  contacts: any;
  addContactVisible = false;
  displayedColumns = ['first-name', 'last-name', 'avatar'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiRequestService: ApiRequestService,
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

  triggerGetApi(value: boolean) {
    this.addContactVisible = value;
    this.apiRequestService.getContacts().subscribe(data => this.contacts = data);
  }

  selectRow(row) {
    console.log('Hello', row);
  }
}
