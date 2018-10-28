import {Host, OnInit} from '@angular/core';
import {AbstractControl, ControlContainer} from '@angular/forms';

export abstract class FormControlAware<T extends AbstractControl = AbstractControl> implements OnInit {
  public control: T;

  constructor(@Host() private controlContainer: ControlContainer) {
  }

  ngOnInit() {
    this.control = <T>this.controlContainer.control;
  }

}
