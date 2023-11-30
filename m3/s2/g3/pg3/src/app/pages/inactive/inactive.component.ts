import { Component } from '@angular/core';
import { iPost } from '../../Models/post';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrl: './inactive.component.scss'
})
export class InactiveComponent {

  postArr:iPost[] = [];

  constructor(private postSvc:PostService){}

  ngOnInit(){
    this.updatePosts()
  }

  updatePosts(){
    this.postArr = this.postSvc.getInactivePosts()
  }


  toggleStatus(post:iPost){
    this.postSvc.toggleActive(post)
    this.updatePosts()
  }


}
