import { Component, ViewEncapsulation, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {SpeedtestService} from "../../services/speedtest.service";

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {
  public confirmTitle: string;
  public spentTime: any;

  constructor( public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any,
               private _timerService: SpeedtestService) { }

  ngOnInit() {
    this.confirmTitle = 'Please, confirm your enter:';
    this.spentTime = this._timerService.estimateTime;
  }

}
