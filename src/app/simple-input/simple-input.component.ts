import {Component, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {noop} from 'rxjs';

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
export class SimpleInputComponent implements ControlValueAccessor {

  private _value;
  private onChangeCallback: (_: any) => void = noop;

  @Input()
  set value(value) {
    this.writeValue(value);
    this.onChangeCallback(value);
  }

  onValueChange(value) {
    console.log(value.target.value);
    this.value = value.target.value;
  }

  get value() {
    return this._value;
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    this._value = obj;
  }
}
