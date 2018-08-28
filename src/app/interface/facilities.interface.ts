export interface Facilities {
  id: string;
  name: string;
  address: Address;
  workingHours: WorkingHours;
  workingDays: string[];
}

export interface Address {
  title: string;
  lng: number;
  lat: number;
}

export interface WorkingHours {
  startD: string;
  finishD: string;
  startS: string;
  finishS: string;
}

export interface TimesList {
  value: number;
  viewValue: string;
}
