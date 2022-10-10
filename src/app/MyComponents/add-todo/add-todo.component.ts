import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title?: string;
  desc:string = '';
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.title == null || this.title?.length == 0 ){
      alert("Please enter the title")
      return;
    }

    const todo= new Todo(
      1,
      this.title,
      this.desc,
      true
    )
    this.todoAdd.emit(todo)
  }

}
