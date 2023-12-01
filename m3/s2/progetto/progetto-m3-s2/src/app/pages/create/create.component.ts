import { Component } from '@angular/core';
import { Todo } from '../../Models/todo';
import { TodoService } from '../../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  constructor(
    private todoSvc:TodoService,
    private router:Router){}

  newTodo:Partial<Todo> = {
    completed:false
  };

  oldTodo:Todo|null = null;
  loading:boolean = false;
  showOppsMessage: boolean = true;


  save(){
    this.loading = true;
    this.newTodo.completed = Boolean(Number(this.newTodo.completed));
    this.todoSvc.create(this.newTodo).then(res => {
      this.loading = false
      this.oldTodo = res;
      this.showOppsMessage = false;
      setTimeout(()=>{
      this.router.navigate(['/'])
      },3000)
    })
  }
}
