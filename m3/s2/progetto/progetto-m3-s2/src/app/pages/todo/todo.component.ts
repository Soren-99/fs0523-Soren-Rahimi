import { TodoService } from './../../todo.service';
import { Component } from '@angular/core';
import { Todo } from '../../Models/todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  todos:Todo[] = [];

  constructor(private todoSvc:TodoService) {}
    ngOnInit(){
      this.todoSvc.getAll().then(todos => this.todos = todos)
    }


}

