import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacilitiesViewComponent } from './facilities-view.component';
import {HeaderModule} from "../../components/header/header.module";
import {FooterModule} from "../../components/footer/footer.module";
import {MaterialModule} from "../../material.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [FacilitiesViewComponent],
  exports: [FacilitiesViewComponent]
})
export class FacilitiesViewModule { }
