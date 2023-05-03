import { Component } from '@angular/core';
import { IArticle } from 'src/app/interfaces/article.interfaces';
import { NewsServiceService } from 'src/app/services/news/news-service.service';

@Component({
  selector: 'app-c-sidebar',
  templateUrl: './c-sidebar.component.html',
  styleUrls: ['./c-sidebar.component.scss']
})
export class CSidebarComponent {
  articles: IArticle[] = [];
  constructor(newsService: NewsServiceService) {
    newsService.getArticles(5).then((articles) => {
      this.articles = articles;
    })
  }
}
