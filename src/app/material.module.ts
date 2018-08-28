import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatRadioModule,
  MatListModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule, MatSelectModule
} from '@angular/material';

@NgModule({
    imports: [
      MatButtonModule,
      MatRadioModule,
      MatListModule,
      MatDialogModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatDialogModule
    ],
    exports: [
      MatButtonModule,
      MatRadioModule,
      MatListModule,
      MatDialogModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatDialogModule
    ]
})
export class MaterialModule {}
