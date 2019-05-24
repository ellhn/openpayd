import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  startJourney() {
    this.router.navigate(['/contacts-list']);
  }
}
