/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {FormBuilder, Validators, formDirectives, ControlGroup} from 'angular2/angular2';
import {TodoStore} from '../../services/TodoStore'

// Annotation section
@Component({
  selector: 'search-form',
  viewInjector: [FormBuilder]
})
@View({
  templateUrl: 'templates/search-form.html',
  directives: [formDirectives]
})
// Component controller
export class SearchForm {
  search: ControlGroup;
  todoStore: TodoStore;
  
  constructor(builder: FormBuilder, todoStore: TodoStore) {
    this.todoStore = todoStore;
    this.search = builder.group({
      place: ['', Validators.required],
      decade: ['', Validators.required],
      direction: ['out', Validators.required]
    });
  }

  add() {
    this.todoStore.add(this.search.controls.place.value + this.search.controls.decade.value + this.search.controls.direction.value);
    return false;
  }
}
