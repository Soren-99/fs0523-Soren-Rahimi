

import { Component } from '@angular/core';
import { IPost } from '../../Models/ipizza';
import { PostsService } from '../../pizze.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrl: './active.component.scss'
})
export class ActiveComponent {

  posts:IPost[]=[];

  constructor(private postsSvc:PostsService){}

  ngOnInit(){
    this.posts = this.postsSvc.getActivePosts()
  }
}
