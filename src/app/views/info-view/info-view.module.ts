import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoViewComponent } from './info-view.component';
import {FooterModule} from "../../components/footer/footer.module";
import {MaterialModule} from "../../material.module";
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import {HeaderModule} from "../../components/header/header.module";

export declare var grecaptcha: any;
@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule
  ],
  declarations: [InfoViewComponent],
  exports: [InfoViewComponent]
})
export class InfoViewModule { }
