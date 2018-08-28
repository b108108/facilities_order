import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './module/routing/routing/routing.module';
import {FacilitiesViewModule} from './views/facilities-view/facilities-view.module';
import {InfoViewModule} from './views/info-view/info-view.module';
import {NotfoundViewModule} from './views/notfound-view/notfound-view.module';
import {FacilitiesService} from './services/facilities.service';
import {FooterService} from './services/footer.service';
import {MaterialModule} from './material.module';
import {CalendarViewModule} from './views/calendar-view/calendar-view.module';
import {ConfirmationDialogModule} from "./components/confirmation-dialog/confirmation-dialog.modules";
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    FacilitiesViewModule,
    CalendarViewModule,
    InfoViewModule,
    NotfoundViewModule,
    ConfirmationDialogModule,
    ReactiveFormsModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
  ],
  providers: [
    FacilitiesService,
    FooterService,
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
      } as RecaptchaSettings,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
