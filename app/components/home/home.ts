import {Component, View, NgFor} from 'angular2/angular2';

import {NamesList} from '../../services/NameList';
import {MigrationMap} from '../../components/migration-map/migration-map';

@Component({
  selector: 'component-1'
})
@View({
  templateUrl: './components/home/home.html?v=<%= VERSION %>',
  directives: [MigrationMap, NgFor]
})
export class Home {
  constructor(public list: NamesList) {
  }

  showMigrations(place, decade, direction) {
    this.list.add(place.value + decade.value + direction.value);
    place.value = '';
    decade.value = '';
  }
}