import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TimesList} from "../../interface/facilities.interface";
import {FacilitiesService} from "../../services/facilities.service";
import {GlobalVars} from "../../globals/variables.global";
import {FooterService} from "../../services/footer.service";
import {Location} from "@angular/common";
import {CalendarService} from "../../services/calendar.service";
import {SpeedtestService} from "../../services/speedtest.service";

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.css']
})
export class CalendarViewComponent implements OnInit {
  public headerText: string;
  public minDate: Date;
  public maxDate: Date;
  public myFilter: any;
  public timesList: TimesList[];
  public selectedDate: Date = null;
  public selectedTime: TimesList;
  public isAccess: boolean;
  private _isDate: boolean;
  private _isTime: boolean;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _facilitiesService: FacilitiesService,
    private _footerService: FooterService,
    private _location: Location,
    private _calendarService: CalendarService,
    private _timerService: SpeedtestService
    ) {
  }

  ngOnInit() {
    this.isAccess = false;
    this._isDate = false;
    this._isTime = false;
    this.headerText = 'Date & Time selected:';
    this._footerService.currentStep = GlobalVars.SECOND;

    if (this._calendarService.selDate !== null) {
      this.selectedDate = this._calendarService.selDate;
      this._isDate = true;
      this.setAccess();
    }

    if (this._calendarService.selTime !== null && this._calendarService.selDate !== null) {
      this.timesList = this._calendarService.fillTimeList(this.selectedDate, this._facilitiesService.currentItem);
      this.selectedTime = this._calendarService.selTime;
      this._isTime = true;
      this.setAccess();
    }

    this.minDate = this._calendarService.getMinDate();
    this.maxDate = this._calendarService.getMaxDate();

    const curDate = (new Date()).getDate();
    this.myFilter = (d: Date): boolean => {
      const day = d.getDay();
      const date = d.getDate();

      if (date < curDate || day === 0) {
        return false;
      } else {
        return true;
      }
    };

    this._timerService.removeTimeStep();
    this._timerService.startTimer();
  }

  changeDate (date) {
    this.timesList = this._calendarService.fillTimeList(date.value, this._facilitiesService.currentItem);
    this._calendarService.selDate = date.value;
    this._isDate = true;
    this.setAccess();
  }

  changeTime(time) {
    this._calendarService.selTime = this.selectedTime;
    this._isTime = true;
    this.setAccess();
  }

  setAccess () {
    if (this._isDate && this._isTime) {
      this.isAccess = true;
    }
  }

  checkNextStep (event) {
    switch (event) {
      case GlobalVars.THIRD: {
        this._timerService.stopTimer();
        this._timerService.addTimer();
        this._router.navigate(['/info']);
        break;
      }
      case GlobalVars.FIRST: {
        this._timerService.stopTimer();
        this._location.back();
        break;
      }
      default: break;
    }
  }
}
