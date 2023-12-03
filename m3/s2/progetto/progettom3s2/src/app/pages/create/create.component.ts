import { Component } from '@angular/core';
import { iTodo } from '../../Models/itodo';
import { Todo } from '../../Models/todo';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
todos: any;

  constructor(
    private todoSvc:TodoService,
    /*private router: Router*/){}

  newTodo:Partial<Todo> = {
    completed:'0'
  };

  oldTodo:Todo|null= null;

  loading:boolean = false

  save(){
    this.loading = true;
    this.newTodo.completed = Boolean(this.newTodo.completed);
    this.todoSvc.create(this.newTodo).then(res => {
      this.loading = false
      this.oldTodo = res;
      /*setTimeout(()=>{
      this.router.navigate(['/'])
      },3000)*/


      this.todoSvc.getAll().then(todos => {
        this.todos = todos;
      })
    })
  }
}
