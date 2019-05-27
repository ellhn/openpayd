import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ApiRequestService } from '../../../services/api-request.service';
import { SharedService } from '../services/shared.service';

@Injectable()
export class AddressResolver implements Resolve<any> {

  constructor(
    private apiRequestService: ApiRequestService,
    private sharedService: SharedService,
    private router: Router
  ) { }

  resolve() {
    return this.apiRequestService.getAddresses(this.sharedService.selectedContact.id)
      .pipe(
        catchError(() => {
          this.router.navigate(['/error-page']);
          return of(null);
        })
      );
  }
}
