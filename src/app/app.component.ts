import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AppModelService} from './app-model.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  model: FormGroup;
  submit = () => {
    console.log(JSON.stringify(this.model.value));
  };

  constructor(private appModelService: AppModelService) {
    this.model = appModelService.createModel();
  }
}
