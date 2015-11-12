import {Component, View} from 'angular2/angular2';
import {Http, HTTP_BINDINGS} from 'angular2/http';

@Component({
  selector: 'migration-map',
  viewBindings: [HTTP_BINDINGS]
})
@View({
  templateUrl: './components/migration-map/migration-map.html?v=<%= VERSION %>'
})
export class MigrationMap {
  place: string = '';
  decade: string = '';
  direction: string = '';
  type: string;
  data: Object[];
  options: Object;

  http: Http;

  constructor(http: Http) {
    this.http = http;

    this.type = "pie";
    this.options = { "title": "Distribution of days in 2001Q1" };
    this.data = [["Month", "Days"], ["Jan", 31], ["Feb", 28], ["Mar", 31]];
  }

  refresh(place: string, decade: string, direction: string) {
    this.place = place;
    this.decade = decade;
    this.direction = direction;
    this.http.get(this.buildRequest())
      //Get the RxJS Subject
      .toRx()
      // Call map on the response observable to get the parsed data
      .map(res => res.json())
      // Subscribe to the observable to get the parsed data and attach it to the component
      .subscribe(h => this.update(h));
  }

  buildRequest(): string {
    return "stuff.html";
    // return 'http://www.werelate.org:8000/immigrations?year=' + this.decade + '&place=' + this.place + ',+United+States';
    // http://www.werelate.org:8000/emigrations?year=1900&place=Utah,+United+States
  }

  update(data: Object[]) {
    this.type = "geo";
    this.options = {
      "region": "US",
      "displayMode": "markers",
      "colorAxis": { "colors": ["green", "blue"] }
    };
    this.data = data;   
  }
}