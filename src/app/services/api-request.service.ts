import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
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

  addContact(body): Observable<any> {
    const req = endPoints['addContact'];
    return this.apiService.post(req, body);
  }

}
