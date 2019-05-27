import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class AddEditAddressFormGeneratorService {

  addEditForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.addEditForm = this.fb.group({
      street1: [
        null, Validators.required
      ],
      street2: [
        null, Validators.required
      ],
      town: [
        null, Validators.required
      ],
      country: [
        null, Validators.required
      ],
    });
  }
}
