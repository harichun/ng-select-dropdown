import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { TabsModule, ButtonsModule } from 'ng2-bootstrap';

import { SelectModule } from 'ng2-select';
import { AppComponent } from './app.component';
import {DropDownComponent} from './multi-select/dropdown.component';


import {MultiSelectComponent} from './multi-select/multi-select.component';
import {ReactiveFormsModule}  from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MultiSelectComponent,
    DropDownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SelectModule,
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    CommonModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule {
}
