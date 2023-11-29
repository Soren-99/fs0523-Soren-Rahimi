import { Injectable } from '@angular/core';
import { IPost } from './Models/ipizza';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

posts:IPost[] = [
  {
    id:0,
    body: "Active Lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor lorem ipsum dolor",
    title:"LOREM IPSUM",
    active:true
  },
  {
    id:1,
    body: " Active Lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor lorem ipsum dolor",
    title:"LOREM IPSUM",
    active:true
  },
  {
    id:2,
    body: " Inactive Lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor lorem ipsum dolor",
    title:"LOREM IPSUM",
    active:false
  },
  {
    id:3,
    body: " Inactive Lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor lorem ipsum dolor",
    title:"LOREM IPSUM",
    active:false
  }
  ];

  constructor() { }

  getActivePosts(){
    return this.posts.filter(p => p.active)
  }

  getInactivePosts(){
    return this.posts.filter(p => !p.active)
  }
}

