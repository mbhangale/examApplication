import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private temp: string;
  constructor() {}

  getTemp() {
    return this.temp;
  }

  setTemp(tmp) {
    this.temp = tmp;
  }

  ngOnInit(): void {}
}
