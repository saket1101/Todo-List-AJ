import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  localItems: string | null;

  constructor() {
    this.todos = [];
    this.localItems = localStorage.getItem("todos")
    console.log(this.localItems)
    if (this.localItems == null) {
      this.todos = []
    }
    else {
      this.todos = JSON.parse(this.localItems)
    }
  }

  ngOnInit(): void {
  }
  deleteTodo(todo: Todo) {
    console.log(todo)
    if (this.todos != null) {
      const index = this.todos.indexOf(todo);
      this.todos.splice(index, 1)
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }
  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
 
}
