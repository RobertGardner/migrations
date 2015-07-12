export interface ToDo {
  text: string;
  done: boolean;
}

export class TodoStore {
  todos: Array<ToDo>;

  constructor() {
    this.todos = [{ text: 'Alice', done: false }, { text: 'Bob', done: true }];
  }

  add(item: string): void {
    this.todos.unshift({ text: item, done: false });
  }
}