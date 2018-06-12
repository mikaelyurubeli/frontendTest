import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { DateConverterComponent } from './date-converter/date-converter.component';
import { ResultConvertComponent } from './result-convert/result-convert.component';

@NgModule({
  declarations: [
    AppComponent,
    DateConverterComponent,
    ResultConvertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: DateConverterComponent
      },
      {
        path: 'result',
        component: ResultConvertComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
