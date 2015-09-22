import {Component, View} from 'angular2/angular2';
import {Http, HTTP_BINDINGS} from 'angular2/http';

@Component({
  selector: 'migration-map',
  properties: ['place', 'decade', 'direction'],
  viewBindings: [HTTP_BINDINGS]
})
@View({
  templateUrl: './components/migration-map/migration-map.html?v=<%= VERSION %>'
})
export class MigrationMap {
  place: string;
  decade: string;
  direction: string;
  type: string;
  data: Object[];
  options: Object;

  http: Http;
  response: string;

  constructor(http: Http) {
    this.type = "pie";
    this.options = { "title": "Distribution of days in 2001Q1" };
    this.data = [["Month", "Days"], ["Jan", 31], ["Feb", 28], ["Mar", 31]];

    this.http = http;
    this.response = "Nothing fetched yet";
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
    this.http.get('stuff.html')
      //Get the RxJS Subject
      .toRx()
      // Subscribe to the observable to get the parsed people object and attach it to the
      // component
      .subscribe(h => this.response = h.text());
  }
}