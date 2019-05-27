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

  getAddresses(contactId): Observable<any> {
    const req = `${endPoints['getAddresses']}/${contactId}/addresses`;
    return this.apiService.get(req);
  }

  getAllAddresses(): Observable<any> {
    const req = endPoints['getAllAddresses'];
    return this.apiService.get(req);
  }

  addContact(body): Observable<any> {
    const req = endPoints['addContact'];
    return this.apiService.post(req, body);
  }

  addAddress(body, contactId): Observable<any> {
    const req = `${endPoints['addAddress']}/${contactId}/addresses`;
    return this.apiService.post(req, body);
  }

  updateAddress(body, addressId): Observable<any> {
    const req = `${endPoints['updateAddress']}/${addressId}`;
    return this.apiService.put(req, body);
  }

  deleteAddress(addressId): Observable<any> {
    const req = `${endPoints['deleteAddress']}/${addressId}`;
    return this.apiService.delete(req);
  }
}
