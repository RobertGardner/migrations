import {Component, View, coreDirectives} from 'angular2/angular2';

@Component({
  selector: 'migration-map',
})
@View({
  templateUrl: 'templates/migration-map.html',
  directives: [coreDirectives]
})
export class MigrationMap {  
  constructor() {
  }
}
