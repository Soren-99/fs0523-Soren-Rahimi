import { Injectable } from '@angular/core';
import { IPizza } from './Models/ipizza';

@Injectable({
  providedIn: 'root'
})
export class PizzeService {

pizze:IPizza[] = [
    {
      id:0,
      gusto:'Margherita',
      prezzo: 5,
      active: true,
    },
    {
      id:1,
      gusto:'Boscaiola',
      prezzo: 7,
      active: false,
    },
    {
      id:2,
      gusto:'Regina',
      prezzo: 8,
      active: false,
    },
    {
      id:3,
      gusto:'Calzone',
      prezzo: 10,
      active: true,
    }
  ];

  constructor() { }

  getActivePizzas(){
    return this.pizze.filter(p => p.active)
  }

  getInactivePizzas(){
    return this.pizze.filter(p => !p.active)
  }
}

