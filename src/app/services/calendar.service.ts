import { Injectable } from '@angular/core';
import { TimesList } from "../interface/facilities.interface";

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  timesList: TimesList[];
  selectedDate: Date = null;
  selectedTime: TimesList = null;

  constructor() {  }

  get selDate () {
    return this.selectedDate;
  }

  set selDate (value) {
    this.selectedDate = value;
  }

  get selTime () {
    return this.selectedTime;
  }

  set selTime (value) {
    this.selectedTime = value;
  }

  getMinDate () {
    const curDate = new Date;
    const curYear = curDate.getFullYear();
    const curMonth = curDate.getMonth();
    return new Date (curYear, curMonth, 1);
  }

  getMaxDate () {
    const curDate = new Date;
    const curYear = curDate.getFullYear();
    const curMonth = curDate.getMonth();
    return new Date(curYear, curMonth + 1, 0);
  }

  fillTimeList (date, itemList) {
    const day = date.getDay();
    let startH:  number;
    let finishH: number;

    if (day === 6) { // saturday
      startH = itemList.workingHours.startS;
      finishH = itemList.workingHours.finishS;
    } else { // other working day
      startH = itemList.workingHours.startD;
      finishH = itemList.workingHours.finishD;
    }

    let len: number;
    if (finishH > startH) {
      len = 24 - finishH + startH;
    } else {
      len = finishH - startH;
    }

    let iterH = +startH;
    this.timesList = [];
    for (let index = 0; index < len; index++) {
      if (iterH < 12) {
        if (iterH < 10) {
          this.timesList.push({'value': iterH, 'viewValue': '0' + iterH + ':00 AM'});
        } else {
          this.timesList.push({'value': iterH, 'viewValue': iterH + ':00 AM'});
        }
      } else {
        if (iterH >= 12) {
          this.timesList.push({'value': iterH, 'viewValue': iterH + ':00 PM'});
        }
      }
      iterH++;
      if (iterH > 23) {
        iterH = 0;
      }
    }
    return this.timesList;
  }
}
