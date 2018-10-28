import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ComplexInputComponent} from './complex-input/complex-input.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SimpleInputComponent} from './simple-input/simple-input.component';
import {ArrayInputComponent} from './array-input/array-input.component';
import {ArrayEntryComponent} from './array-entry/array-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    ComplexInputComponent,
    SimpleInputComponent,
    ArrayInputComponent,
    ArrayEntryComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
