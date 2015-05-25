/// <reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View, coreDirectives} from 'angular2/angular2';

import {TodoStore, ToDo} from '../services/TodoStore'

@Component({
  selector: 'migration-map',
})
@View({
  templateUrl: 'templates/migration-map.html',
  directives: [coreDirectives]
})
export class MigrationMap {
  todoStore: TodoStore;
  
  constructor(todoStore: TodoStore) {
    this.todoStore = todoStore;
  }

  toggleToDoState(todo: ToDo) {
    todo.done = !todo.done;
  }
}
