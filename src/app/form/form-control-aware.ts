import {Host, Input, OnInit} from '@angular/core';
import {AbstractControl, ControlContainer, ControlValueAccessor, FormControl} from '@angular/forms';
import {noop} from 'rxjs';

export abstract class FormControlAware<T extends AbstractControl = AbstractControl> implements ControlValueAccessor, OnInit {
  @Input()
  formControlName: string;

  private onChangeCallback: (_: any) => void = noop;
  public formGroup: T;

  constructor(@Host() private controlContainer: ControlContainer) {
  }

  ngOnInit() {
    this.formGroup = <T>this.controlContainer.control;
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
