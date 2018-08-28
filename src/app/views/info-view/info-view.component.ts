import { Component, OnInit, AfterViewInit } from '@angular/core';
import {GlobalVars} from "../../globals/variables.global";
import {FacilitiesService} from "../../services/facilities.service";
import {FooterService} from "../../services/footer.service";
import {ActivatedRoute, Router} from "@angular/router";
import { Location } from '@angular/common';
import {ConfirmationDialogComponent} from "../../components/confirmation-dialog/confirmation-dialog.component";
import { MatDialog, MatDialogRef } from '@angular/material';
import {InfoService} from "../../services/info.service";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {SpeedtestService} from "../../services/speedtest.service";

import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-info-view',
  templateUrl: './info-view.component.html',
  styleUrls: ['./info-view.component.css']
})
export class InfoViewComponent implements OnInit, AfterViewInit {
  public headerText: string;
  public fullName: string;
  public latitude: string;
  public longitude: string;
  public namePattern: string = '^[a-zA-z ]+$';
  public coordinateMask: (RegExp | string)[] = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
  public infoForm: FormGroup;
  public grecaptcha: any;

  constructor (
    private _location: Location,
    private _router: Router,
    private _route: ActivatedRoute,
    private _facilitiesService: FacilitiesService,
    private _footerService: FooterService,
    public dialog: MatDialog,
    private router: Router,
    private _infoService: InfoService,
    private fb: FormBuilder,
    private _timerService: SpeedtestService
  ) { }

  ngOnInit() {
    this.headerText = 'Fill forms:';
    this._footerService.currentStep = GlobalVars.THIRD;
    this.fullName = this._infoService.currentFullName;
    this.latitude = this._infoService.currentLatitude;
    this.longitude = this._infoService.currentLongitude;
    this.grecaptcha = null;
    this.infoForm = this.fb.group({
      fullName: this.fullName,
      latitude: this.latitude,
      longitude: this.longitude,
      recaptchaReactive: new FormControl(null, Validators.required)
    });
    this._timerService.removeTimeStep();
    this._timerService.startTimer();
  }

  ngAfterViewInit () {
  }

  changeName (event) {
    this._infoService.currentFullName = event.value;
  }

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '300px', height: '300px',
      data: {fullName: this.fullName, latitude: this.latitude, longitude: this.longitude}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._footerService.currentStep = GlobalVars.FIRST;
        this.router.navigate(['']);
      } else {
        this._timerService.removeTimeStep();
        this._timerService.startTimer();
        this._footerService.currentStep = GlobalVars.THIRD;
      }
    });
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

  checkNextStep (event) {
    switch (event) {
      case GlobalVars.FORTH: {
        this._timerService.stopTimer();
        this._timerService.addTimer();
        this.openDialog();
        break;
      }
      case GlobalVars.SECOND: {
        this._timerService.stopTimer();
        this._location.back();
        break;
      }
      default: break;
    }
  }
}
