import {Component} from '@angular/core';
import {FormControlAware} from '../form/form-control-aware';

@Component({
  selector: 'app-complex-input',
  templateUrl: './complex-input.component.html',
  styleUrls: ['./complex-input.component.less']
})
export class ComplexInputComponent extends FormControlAware {
  get componentName(): string {
    return 'complexInput';
  }

}
