import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'migration-map',
  properties: ['place', 'decade', 'direction']
})
@View({
  templateUrl: './components/migration-map/migration-map.html?v=<%= VERSION %>'
})
export class MigrationMap {
  type: string;
  place: string;
  decade: string;
  direction: string;
  data: Object;
  options: Object;

  constructor() {
    this.type = "pie";
    this.options = { "title": "Distribution of days in 2001Q1" };
    this.data = [["Month", "Days"], ["Jan", 31], ["Feb", 28], ["Mar", 31]];
  }

  refresh() {
    this.type = "geo";
    this.options = {
      "region": "IT",
      "displayMode": "markers",
      "colorAxis": { "colors": ["green", "blue"] }
    };
    this.data = [
      ["City", "Population", "Density"],
      ["Rome", 3456789, 1285.31],
      ["Milan", 1324110, 181.76],
      ["Naples", 959574, 117.27],
      ["Turin", 907563, 130.17],
      ["Palermo", 655875, 158.9],
      ["Genoa", 607906, 243.60],
      ["Bologna", 380181, 140.7],
      ["Florence", 371282, 102.41],
      ["Fiumicino", 67370, 213.44],
      ["Anzio", 52192, 43.43],
      ["Ciampino", 38262, 11]
    ];
  }

  addName(place, decade, direction) {
  }
}