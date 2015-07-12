/// <reference path="../typings/tsd.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

import {SearchForm} from './components/search_form/SearchForm';
import {MigrationMap} from './components/migration_map/MigrationMap';
import {TodoStore} from './services/TodoStore';

@Component({
  selector: 'migration-app',
  viewInjector: [TodoStore]
})
@View({
  templateUrl: './templates/migration-app.html',
  directives: [SearchForm, MigrationMap]
})
class MigrationApp {
  constructor() {
  }
}

bootstrap(MigrationApp);