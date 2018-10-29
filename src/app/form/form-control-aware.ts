import {Host, Input, OnInit, Optional} from '@angular/core';
import {AbstractControl, ControlContainer, ControlValueAccessor, FormControl} from '@angular/forms';
import {noop} from 'rxjs';

export abstract class FormControlAware<T extends AbstractControl = AbstractControl> implements ControlValueAccessor, OnInit {
  @Input()
  formControlName: string;

  private onChangeCallback: (_: any) => void = noop;
  public formGroup: AbstractControl;
  public formControl: FormControl;

  constructor(@Host() private controlContainer: ControlContainer) {
  }

  ngOnInit() {
    this.formGroup = <AbstractControl>this.controlContainer.control;
    if (this.formControlName) {
      this.formControl = <FormControl>this.formGroup.get(this.formControlName);
    }
  }

  writeValue(value) {
    this.onChangeCallback(value);
  }

  registerOnChange(fn) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn) {
  }
}
