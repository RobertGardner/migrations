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

  constructor(http: Http) {
    this.type = "pie";
    this.options = { "title": "Distribution of days in 2001Q1" };
    this.data = [["Month", "Days"], ["Jan", 31], ["Feb", 28], ["Mar", 31]];

    this.http = http;
    this.response = "Nothing fetched yet";
  }

  refresh() {
    this.http.get('stuff.html')
      //Get the RxJS Subject
      .toRx()
      // Call map on the response observable to get the parsed data
      .map(res => res.json())
      // Subscribe to the observable to get the parsed data and attach it to the component
      .subscribe(h => this.update(h));
  }

  update(data: Ojbect[]) {
    this.type = "geo";
    this.options = {
      "region": "IT",
      "displayMode": "markers",
      "colorAxis": { "colors": ["green", "blue"] }
    };
    this.data = data;   
  }
}