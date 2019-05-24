import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ApiRequestService } from '../../../services/api-request.service';

@Injectable()
export class ContactsListResolver implements Resolve<any> {

  constructor(
    private apiRequestService: ApiRequestService,
    private router: Router
  ) { }

  resolve() {
    return this.apiRequestService.getContacts()
      .pipe(
        catchError(() => {
          this.router.navigate(['/error']);
          return of(null);
        })
      );
  }
}
