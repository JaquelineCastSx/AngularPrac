import { Component, Input } from '@angular/core';
import { IArticle } from 'src/app/interfaces/article.interfaces';

@Component({
  selector: 'app-c-post',
  templateUrl: './c-post.component.html',
  styleUrls: ['./c-post.component.scss']
})
export class CPostComponent {
@Input() article?: IArticle;
}
