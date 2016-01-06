import {Component} from 'angular2/core';

@Component({
  selector: 'home',
  templateUrl: './components/home/home.html',
  styleUrls: ['./components/home/home.css']
})
export class HomeCmp {
  t: string;
  d: Object[];
  o: Object;

  constructor() {
    this.t = 'pie';
    this.o = { 'title': 'Distribution of days in 2001Q1' };
    this.d = [['Month', 'Days'], ['Jan', 31], ['Feb', 28], ['Mar', 31]];
  }

  refresh() {
    this.t = 'geo';
    this.o = {
      'region': 'IT',
      'displayMode': 'markers',
      'colorAxis': { 'colors': ['green', 'blue'] }
    };
    this.d = [
      ['City', 'Population', 'Density'],
      ['Rome', 3456789, 1285.31],
      ['Milan', 1324110, 181.76],
      ['Naples', 959574, 117.27],
      ['Turin', 907563, 130.17],
      ['Palermo', 655875, 158.9],
      ['Genoa', 607906, 243.60],
      ['Bologna', 380181, 140.7],
      ['Florence', 371282, 102.41],
      ['Fiumicino', 67370, 213.44],
      ['Anzio', 52192, 43.43],
      ['Ciampino', 38262, 11]
    ];
  }
}
