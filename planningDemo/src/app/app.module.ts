import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ScheduleModule, AgendaService, DayService, WeekService, WorkWeekService, MonthService, DragAndDropService, ResizeService } from '@syncfusion/ej2-angular-schedule';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     ScheduleModule
  ],
  providers: [AgendaService, DayService, WeekService, WorkWeekService, MonthService, DragAndDropService, ResizeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
