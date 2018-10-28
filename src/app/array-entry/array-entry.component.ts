import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControlAware} from '../form/form-control-aware';

export interface RemoveEntryEvent {
  index: number;
}

@Component({
  selector: 'app-array-entry',
  templateUrl: './array-entry.component.html',
  styleUrls: ['./array-entry.component.less']
})
export class ArrayEntryComponent extends FormControlAware {

  @Input()
  index: number;

  @Output()
  onRemove: EventEmitter<RemoveEntryEvent> = new EventEmitter();

  removeEntry() {
    this.onRemove.emit({index: this.index});
  }
}
