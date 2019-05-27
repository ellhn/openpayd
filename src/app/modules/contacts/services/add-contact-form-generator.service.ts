import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class AddContactFormGeneratorService {

  addForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.addForm = this.fb.group({
      firstName: [
        null, Validators.required
      ],
      lastName: [
        null, Validators.required
      ],
      avatarUrl: [
        'http://', Validators.required
      ]
    });
  }
}
