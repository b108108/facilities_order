import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConfirmationDialogComponent} from './confirmation-dialog.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [ConfirmationDialogComponent],
    exports: [ConfirmationDialogComponent],
    entryComponents: [ConfirmationDialogComponent],})

export class ConfirmationDialogModule {
}
