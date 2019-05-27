import { Injectable } from '@angular/core';

interface ISchemeObject {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}

@Injectable()
export class SharedService {

  selectedContact: ISchemeObject;
  addressId: number;

  constructor(
  ) { }
}
