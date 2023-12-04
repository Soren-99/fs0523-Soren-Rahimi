import { iTodo } from './../../Models/itodo';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../../todo.service';
import { Todo } from '../../Models/todo';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {

  constructor(
    private route: ActivatedRoute,
    private todoSvc: TodoService
    ){}

  todo!:Todo;

  ngOnInit(){
    this.route.params.subscribe((params:any) => {

      this.todoSvc.getbyId(params.id).then(res => this.todo = res)

    })
  }

  save(){
    this.todoSvc.update(this.todo).then(res => {

    })
  }

}
