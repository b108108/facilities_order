import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FooterService} from "../../services/footer.service";
import {GlobalVars} from "../../globals/variables.global";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() isAccess: boolean;
  @Output() result = new EventEmitter<number>();
  private _isShowNext: boolean;
  private _isShowBack: boolean;
  public titleNext: string;

  constructor(
    private _footerService: FooterService
  ) {
    this._isShowNext = false;
    this._isShowBack = false;
  }

  ngOnInit() {
    this._isShowNext = this._footerService.isShowNext();
    this._isShowBack = this._footerService.isShowBack();
    switch (this._footerService.currentStep) {
      case GlobalVars.THIRD: {
        this.titleNext = 'Submit';
        break;
      }
      case GlobalVars.FORTH: {
        this.titleNext = 'Confirm';
        break;
      }
      default: {
        this.titleNext = 'Next';
        break;
      }
    }
  }

  pressButton (step = 1) {
    this._footerService.nextStep = step;
    this.result.emit(this._footerService.currentStep);
  }

}
