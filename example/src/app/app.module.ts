import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { GuessComponent } from './guess/guess.component';
import { CalcComponent } from './calc/calc.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    GuessComponent,
    CalcComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [CourseComponent, CalcComponent]
})
export class AppModule { }