import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AppModelService {


  constructor(private formBuilder: FormBuilder) {
  }

  createModel(): FormGroup {
    return this.formBuilder.group(
      {
        surname: ['', Validators.required],
        personalDetails: this.formBuilder.group({
          name: ['', Validators.required],
          title: [''],
          other: ['asdasd', Validators.required]
        }),
        someArray: this.formBuilder.array([])
      });
  }

  createArrayEntry() {
    return this.formBuilder.group({
        name: ['', Validators.required],
        value: ['']
      }
    );
  }
}
