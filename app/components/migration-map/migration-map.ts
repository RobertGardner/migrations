import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
  selector: 'migration-map',
  templateUrl: './components/migration-map/migration-map.html',
  viewBindings: [HTTP_PROVIDERS]
})
export class MigrationMapCmp {
  filters: Object;
  filterKeys: string[];
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
    this.filters = {
      '': 'World',
      'US': 'United States',
      'US-AL': 'Alabama, United States',
      'US-AK': 'Alaska, United States',
      'US-AZ': 'Arizona, United States',
      'US-AR': 'Arkansas, United States',
      'US-CA': 'California, United States',
      'US-CO': 'Colorado, United States',
      'US-CT': 'Connecticut, United States',
      'US-DE': 'Delaware, United States',
      'US-DC': 'District of Columbia, United States',
      'US-FL': 'Florida, United States',
      'US-GA': 'Georgia, United States',
      'US-HI': 'Hawaii, United States',
      'US-ID': 'Idaho, United States',
      'US-IL': 'Illinois, United States',
      'US-IN': 'Indiana, United States',
      'US-IA': 'Iowa, United States',
      'US-KS': 'Kansas, United States',
      'US-KY': 'Kentucky, United States',
      'US-LA': 'Louisiana, United States',
      'US-ME': 'Maine, United States',
      'US-MD': 'Maryland, United States',
      'US-MA': 'Massachusetts, United States',
      'US-MI': 'Michigan, United States',
      'US-MN': 'Minnesota, United States',
      'US-MS': 'Mississippi, United States',
      'US-MO': 'Missouri, United States',
      'US-MT': 'Montana, United States',
      'US-NE': 'Nebraska, United States',
      'US-NV': 'Nevada, United States',
      'US-NH': 'New Hampshire, United States',
      'US-NJ': 'New Jersey, United States',
      'US-NM': 'New Mexico, United States',
      'US-NY': 'New York, United States',
      'US-NC': 'North Carolina, United States',
      'US-ND': 'North Dakota, United States',
      'US-OH': 'Ohio, United States',
      'US-OK': 'Oklahoma, United States',
      'US-OR': 'Oregon, United States',
      'US-PA': 'Pennsylvania, United States',
      'US-RI': 'Rhode Island, United States',
      'US-SC': 'South Carolina, United States',
      'US-SD': 'South Dakota, United States',
      'US-TN': 'Tennessee, United States',
      'US-TX': 'Texas, United States',
      'US-UT': 'Utah, United States',
      'US-VT': 'Vermont, United States',
      'US-VA': 'Virginia, United States',
      'US-WA': 'Washington, United States',
      'US-WV': 'West Virginia, United States',
      'US-WI': 'Wisconsin, United States',
      'US-WY': 'Wyoming, United States'
    };
    this.filterKeys = Object.keys(this.filters);
    this.filter = 'US-IL';

    this.type = 'pie';
    this.options = { 'title': 'Distribution of days in 2001Q1' };
    this.data = [['Month', 'Days'], ['Jan', 31], ['Feb', 28], ['Mar', 31]];
  }

  refresh(place: string, decade: string, direction: string) {
    this.place = place;
    this.decade = decade;
    this.direction = direction;

    this.http.get(this.buildRequest())
        .subscribe(res => this.update(res.json()));
  }

  buildRequest(): string {
    var debug = true; // Set to true to serve files in assets/stuffXXX.html
    if (debug) {
      var postfix = '';
      if (this.filter !== '') {
        postfix = '_' + this.filter;
      }
      return './assets/stuff' + postfix + '.html';
    }

    var dir = (this.direction === '') ? 'immigrations' : 'emigrations';
    var url = 'http://www.werelate.org:8000/' + dir + '?';
    url = url + 'year=' + encodeURI(this.decade) + '&place=' + encodeURI(this.place);
    if (this.filter !== '') {
      url = url + '&filter=' + this.filters[this.filter];
    }
    return url;
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
