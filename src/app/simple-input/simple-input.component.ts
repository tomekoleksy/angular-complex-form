import {Component} from '@angular/core';
import {FormControlAware} from '../form/form-control-aware';

@Component({
  selector: 'app-simple-input',
  templateUrl: './simple-input.component.html',
  styleUrls: ['./simple-input.component.less']
})
export class SimpleInputComponent extends FormControlAware {
  get componentName(): string {
    return 'simpleInput';
  }

}
