import { Injectable } from '@angular/core';
import {Facilities} from '../interface/facilities.interface';

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {
  private listItem: Facilities[];
  private titleDays = ['Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  private selectedIndex: number = 0;

  constructor() {
    this.listItem = [
      {
        id: '0',
        name: 'Olga Invanovna',
        address: {title: 'vulica Arloŭskaja 66/9, Minsk, Belarus', lat: 53.931319, lng: 27.532489},
        workingHours: {startD: '8', finishD: '15', startS: '12', finishS: '14'},
        workingDays: this.titleDays
      },
      {
        id: '1',
        name: 'Sergey Sergeevich',
        address: {title: 'vulica Arloŭskaja 66/9, Minsk, Belarus', lat: 53.931319, lng: 27.532489},
        workingHours: {startD: '9', finishD: '11', startS: '9', finishS: '14'},
        workingDays: this.titleDays
      },
      {
        id: '2',
        name: 'Konstantin Albertovich',
        address: {title: 'vulica Arloŭskaja 66/9, Minsk, Belarus', lat: 53.931319, lng: 27.532489},
        workingHours: {startD: '8', finishD: '16', startS: '10', finishS: '15'},
        workingDays: this.titleDays
      },
      {
        id: '3',
        name: 'Mariya Zaharovna',
        address: {title: 'vulica Arloŭskaja 66/9, Minsk, Belarus', lat: 53.931319, lng: 27.532489},
        workingHours: {startD: '8', finishD: '13', startS: '11', finishS: '17'},
        workingDays: this.titleDays
      },
      {
        id: '4',
        name: 'Natalya Borisovna',
        address: {title: 'vulica Arloŭskaja 66/9, Minsk, Belarus', lat: 53.931319, lng: 27.532489},
        workingHours: {startD: '8', finishD: '15', startS: '10', finishS: '15'},
        workingDays: this.titleDays
      }
    ];
  }

  get list () {
    return this.listItem;
  }

  set list (list) {
    this.listItem = list;
  }

  get currentItem () {
    return this.listItem[this.selectedIndex];
  }

  get currentIndex () {
    return this.selectedIndex;
  }

  set currentItem (index) {
    this.selectedIndex = +index;
  }
}

