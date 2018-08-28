import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  private _fullName: string = '';
  private _latitude: string = '';
  private _longitude: string = '';

  constructor() { }

  get currentFullName () {
    return this._fullName;
  }

  set currentFullName (value) {
    this._fullName = value;
  }

  get currentLatitude () {
  return this._latitude;
  }

  set currentLatitude (value) {
  this._latitude = value;
  }

  get currentLongitude () {
    return this._longitude;
  }

  set currentLongitude (value) {
    this._longitude = value;
  }
}
