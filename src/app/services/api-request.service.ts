import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';

//import { QuoteRequestModel } from '../shared/models/quote-request.model';

import { endPoints } from '../shared/constants/endpoints';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(private apiService: ApiService) { }

  getContacts(): Observable<any> {
    const req = endPoints['getContacts'];
    return this.apiService.get(req);
  }

}
