import {Component} from 'angular2/angular2';
import {Http, HTTP_BINDINGS} from 'angular2/http';

@Component({
  selector: 'migration-map',
  viewBindings: [HTTP_BINDINGS],
  templateUrl: './components/migration-map/migration-map.html'
})
export class MigrationMapCmp {
  place: string = '';
  filter: string = '';
  decade: string = '';
  direction: string = '';
  type: string;
  data: Object[];
  options: Object;

  http: Http;

  constructor(http: Http) {
    this.http = http;

    this.type = 'pie';
    this.options = { 'title': 'Distribution of days in 2001Q1' };
    this.data = [['Month', 'Days'], ['Jan', 31], ['Feb', 28], ['Mar', 31]];
  }

  refresh(place: string, filter: string, decade: string, direction: string) {
    this.place = place;
    this.filter = filter;
    this.decade = decade;
    this.direction = direction;
    this.http.get(this.buildRequest())
      // Call map on the response observable to get the parsed data
      .map(res => res.json())
      // Subscribe to the observable to get the parsed data and attach it to the component
      .subscribe(h => this.update(h));
  }

  buildRequest(): string {
    var dir = (this.direction === '') ? 'immigrations' : 'emigrations';
    var url = 'http://www.werelate.org:8000/' + dir + '?';
    url = url + 'year=' + encodeURI(this.decade) + '&place=' + encodeURI(this.place);
    if (this.filter !== '') {
      url = url + '&filter=' + this.filter;
    }
    // return url;

    var postfix = '';
    if (this.filter !== '') {
      postfix = '_' + this.filter;
    }
    return 'assets/stuff' + postfix + '.html';
  }

  update(data: Object[]) {
    var region = (this.filter === '') ? 'world' : this.filter;
    var resolution = (region === 'world') ? 'countries' : 'provinces';
    var mode = (this.filter.indexOf('-') < 0) ? 'regions' : 'markers';
    this.type = 'geo';
    this.options = {
      'region': region, // Values: world, US (for US), US-CA (for California)
      'resolution': resolution, // Values: countries, provinces, metros 
      'displayMode': mode, // Values: regions, markers
      'colorAxis': { 'colors': ['green'] },
      'backgroundColor': '#81d4fa',
      'datalessRegionColor': '#f8bbd0',
      'defaultColor': '#f5f5f5'
    };
    this.data = this.fixupData(data);
  }

  fixupData(data: Object[]): Object[][] {
    var fixed = [];
    fixed.push(['Place', 'Count']);
    for (var i = 0; i < data.length; i++) {
      fixed.push([data[i][0], data[i][1]]);
    }
    return fixed;
  }
}
