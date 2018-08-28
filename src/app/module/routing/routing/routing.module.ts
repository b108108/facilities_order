import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import {FacilitiesViewComponent} from '../../../views/facilities-view/facilities-view.component';
import {CalendarViewComponent} from '../../../views/calendar-view/calendar-view.component';
import {InfoViewComponent} from '../../../views/info-view/info-view.component';
import {NotfoundViewComponent} from "../../../views/notfound-view/notfound-view.component";

const appRoutes: Routes = [
  {path: 'facilities',
    component: FacilitiesViewComponent},
  {path: 'calendar',
    component: CalendarViewComponent},
  {path: 'info',
    component: InfoViewComponent},
  {path: '', redirectTo: 'facilities', pathMatch: 'full'},
  {path: '**', component: NotfoundViewComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
