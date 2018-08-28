import { Injectable } from '@angular/core';
import { GlobalVars } from '../globals/variables.global';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  private step = GlobalVars.START;

  constructor() { }

  get currentStep () {
    return this.step;
  }

  set currentStep (value) {
    this.step = value;
  }

  set nextStep (value) {
    this.step += value;
    if (this.step < GlobalVars.START) {
      this.step = GlobalVars.START;
    }
    if (this.step > GlobalVars.FINISH) {
      this.step = GlobalVars.FINISH;
    }
  }

  isShowNext () {
    if (this.step < GlobalVars.FINISH) {
      return true;
    }
    return false;
  }

  isShowBack () {
    if (this.currentStep > GlobalVars.START) {
      return true;
    }
    return false;
  }
}
