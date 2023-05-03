import { Component, Input } from '@angular/core';
import { IArticle } from 'src/app/interfaces/article.interfaces';

@Component({
  selector: 'app-c-sidebar-news-item',
  templateUrl: './c-sidebar-news-item.component.html',
  styleUrls: ['./c-sidebar-news-item.component.scss']
})
export class CSidebarNewsItemComponent {
  @Input() article?: IArticle;
}
