import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { UserFormComponent } from './user-form/user-form.component';
import { StructComponent } from './struct/struct.component'

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    UserFormComponent,
    StructComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
