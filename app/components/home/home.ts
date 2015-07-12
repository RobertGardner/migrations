import {Component, View, NgFor} from 'angular2/angular2';

import {NamesList} from '../../services/NameList';

@Component({
  selector: 'component-1'
})
@View({
  templateUrl: './components/home/home.html?v=<%= VERSION %>',
  directives: [NgFor]
})
export class Home {
  constructor(public list: NamesList) {
  }

  add(place, decade, direction) {
    this.list.add(place.value + decade.value + direction.value);
    place.value = '';
    decade.value = '';
  }
}