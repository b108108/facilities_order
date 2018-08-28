import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarViewComponent } from './calendar-view.component';
import {FooterModule} from "../../components/footer/footer.module";
import {MaterialModule} from "../../material.module";
import {FormsModule} from "@angular/forms";
import {HeaderModule} from "../../components/header/header.module";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    MaterialModule,
    FormsModule,
    RouterModule
  ],
  declarations: [CalendarViewComponent],
  exports: [CalendarViewComponent]
})
export class CalendarViewModule { }
