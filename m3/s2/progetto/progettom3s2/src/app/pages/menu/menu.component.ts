import { Component } from '@angular/core';
import { Todo } from '../../Models/todo';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  todos: Todo[] = [];

  constructor(private todoSvc:TodoService){}

  ngOnInit(){
    this.todoSvc.getAll().then(todos => this.todos = todos)
  }
}
