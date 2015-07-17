/// <reference path="../../../typings/tsd.d.ts" />
import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'migration-map',
  properties: ['place', 'decade', 'direction']
})
@View({
  templateUrl: './components/migration-map/migration-map.html?v=<%= VERSION %>',
  directives: []
})
export class MigrationMap {
  place: string;
  decade: string;
  direction: string;

  constructor() {
  }

  draw(place: string, decade: string, direction: string) {
    this.place = place;
    this.decade = decade;
    this.direction = direction;
  }
}