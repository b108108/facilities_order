import { Component, OnInit } from '@angular/core';
import {FacilitiesService} from "../../services/facilities.service";
import {Facilities} from "../../interface/facilities.interface";
import {GlobalVars} from '../../globals/variables.global';
import {Router} from "@angular/router";
import {FooterService} from "../../services/footer.service";
import {SpeedtestService} from "../../services/speedtest.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-facilities-view',
  templateUrl: './facilities-view.component.html',
  styleUrls: ['./facilities-view.component.css']
})
export class FacilitiesViewComponent implements OnInit {
  public headerText: string;
  public listItem: Facilities[];
  public selected: any;
  public isAccess: boolean;
  public radioForm: FormGroup;

  constructor(
    private _facilitiesService: FacilitiesService,
    private _router: Router,
    private _footerService: FooterService,
    private _timerService: SpeedtestService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.headerText = 'Choose facilities:';
    this.listItem = this._facilitiesService.list;
    this._footerService.currentStep = GlobalVars.FIRST;
    this.selected = this._facilitiesService.currentItem.id;
    this.isAccess = true;

    this._timerService.reloadTimer();
    this._timerService.removeTimeStep();
    this._timerService.startTimer();

    this.radioForm = this.fb.group({
      options: [this.selected]
    });
  }

  changeDate (event) {
    this.isAccess = true;
    this.selected = event.value;
  }

  checkNextStep (event) {
    switch (event) {
      case GlobalVars.SECOND: {
        this._facilitiesService.currentItem = this.selected;
        // this._router.navigate(['/calendar', this.listItem[this.selected]]);
        this._timerService.stopTimer();
        this._timerService.addTimer();
        this._router.navigate(['/calendar']);
        break;
      }
    }
  }
}
