import {Component} from '@angular/core';
import {FormControlAware} from '../form/form-control-aware';
import {FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-simple-input',
  templateUrl: './simple-input.component.html',
  styleUrls: ['./simple-input.component.less'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: SimpleInputComponent,
    multi: true
  }]
})
export class SimpleInputComponent extends FormControlAware<FormControl> {

}
