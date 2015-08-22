import {Component, View, LifecycleEvent} from 'angular2/angular2';

@Component({
  selector: 'migration-map',
  properties: ['place', 'decade', 'direction']
})
@View({
  templateUrl: './components/migration-map/migration-map.html?v=<%= VERSION %>',
  directives: [],
  lifecycle: [LifecycleEvent.onChange]
})
export class MigrationMap {
  place: string;
  decade: string;
  direction: string;
  data: Object;
  options: Object;
  value: number;

  constructor() {
    this.value = 2761477;
  }

  refresh(m) {
    m.drawChart();
  }

  onChange(changes) {
    this.options = {
      "region": "IT",
      "displayMode": "markers",
      "colorAxis": { "colors": ["green", "blue"] }
    };
    this.data = [
      // Just use this.place and this.decade as the data labels to test dynamic redraw.
      // Note: dynamic redraw isn't working. Not sure why not.
      ["City", this.place, this.decade],
      ["Rome", this.value, 1285.31],
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
    this.value = this.value / 10;
  }
}