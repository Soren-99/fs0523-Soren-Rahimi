import { iPost } from './Models/post';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  posts:iPost[]=[
    {
      id: 1,
      title: "Lorem ipsum",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit nemo odio quod recusandae placeat, vel magni voluptatibus. Itaque eius quos ducimus. Earum dolorem a doloribus unde debitis quam in?",
      type: "news",
      active: true,
    },
    {
      id: 2,
      title: "Lorem ipsum",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit nemo odio quod recusandae placeat, vel magni voluptatibus. Itaque eius quos ducimus. Earum dolorem a doloribus unde debitis quam in?",
      type: "politic",
      active: false,
    },
    {
      id: 5,
      title: "Lorem ipsum",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit nemo odio quod recusandae placeat, vel magni voluptatibus. Itaque eius quos ducimus. Earum dolorem a doloribus unde debitis quam in?",
      type: "politic",
      active: true,
    }
  ];


  getAll(){
    return this.posts
  }


  getActivePosts(){
    return this.posts.filter(p => p.active)
  }

  getInactivePosts(){
    return this.posts.filter(p => !p.active)
  }

  toggleActive(post: iPost){
    let index = this.posts.findIndex(p => p.id == post.id)
    post.active = !post.active;
    this.posts.splice(index,1,post)
  }


}


