import {Component} from '@angular/core';
import {FormControlAware} from '../form/form-control-aware';
import {ControlContainer, FormArray} from '@angular/forms';
import {AppModelService} from '../app-model.service';
import {RemoveEntryEvent} from '../array-entry/array-entry.component';

@Component({
  selector: 'app-array-input',
  templateUrl: './array-input.component.html',
  styleUrls: ['./array-input.component.less']
})
export class ArrayInputComponent extends FormControlAware<FormArray> {

  constructor(controlContainer: ControlContainer, private modelService: AppModelService) {
    super(controlContainer);
  }

  get formArray(): FormArray {
    return <FormArray>this.formGroup.get('someArray');
  }

  addEntry() {
    this.formArray.push(this.modelService.createArrayEntry());
  }

  onEntryRemoved(event: RemoveEntryEvent) {
    this.formArray.removeAt(event.index);
  }
}
