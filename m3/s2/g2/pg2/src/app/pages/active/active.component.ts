import { Component } from '@angular/core';
import { PizzeService } from '../../pizze.service';
import { IPizza } from '../../Models/ipizza';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrl: './active.component.scss'
})
export class ActiveComponent {

  pizze:IPizza[]=[];

  constructor(private pizzeSvc:PizzeService){}

  ngOnInit(){
    this.pizze = this.pizzeSvc.getActivePizzas()
  }
}
