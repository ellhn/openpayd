import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  contacts: any;
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.contacts = this.route.snapshot.data.contacts;

  }

}
