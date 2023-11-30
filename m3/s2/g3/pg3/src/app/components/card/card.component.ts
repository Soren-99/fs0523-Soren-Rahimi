import { Component, Input } from '@angular/core';
import { iPost } from '../../Models/post';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() post!:iPost;

  getClassObj(){
    return {
        'bg-warning':this.post.type == 'news',
        'bg-black':this.post.type == 'politic',
        'text-white':this.post.type == 'politic',
        'bg-primary':this.post.type == 'education',
    }
  }
}



