import { Injectable } from '@angular/core';
import {FooterService} from "./footer.service";

@Injectable({
  providedIn: 'root'
})
export class SpeedtestService {
  private _startDate: Date;
  private _finishDate: Date;
  private _resultTime: Date;
  private _diffTime: number;
  private _estimateArray: any = [0, 0, 0, 0, 0];
  private _estimateTime: number;

  constructor(
    private _footerService: FooterService
  ) { }

  startTimer () {
    this._startDate = new Date();
  }

  stopTimer () {
    this._finishDate = new Date();
  }

  get spentTime () {
    const timeDiff = Math.abs(this._finishDate.getTime() - this._startDate.getTime());
    this._diffTime = timeDiff / (1000);
    return this._diffTime;
  }

  restartTimer () {
    this._startDate = new Date();
  }

  reloadTimer () {
    this._estimateArray = [0, 0, 0, 0, 0];
    this._estimateTime = 0;
  }

  removeTimeStep () {
    this._estimateArray[this._footerService.currentStep] = 0;
  }

  addTimer () {
    this._estimateArray[this._footerService.currentStep - 1] = this.spentTime;
    this._estimateTime = this._estimateArray.reduce((sum, current) => {
      return sum + current;
    }, 0);
  }

  get estimateTime () {
    let temp = this._estimateTime;
    const hours = Math.trunc(temp / (60 * 24));
    temp -= hours * (60 * 24);
    const minutes = Math.trunc(this._estimateTime / 60);
    temp -= minutes * 60;
    const seconds = Math.round(temp);

    return {'hours': hours, 'minutes': minutes, 'seconds': seconds};
  }
}

