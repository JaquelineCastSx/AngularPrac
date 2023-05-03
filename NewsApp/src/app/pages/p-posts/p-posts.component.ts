import { Component } from '@angular/core';
import { IArticle } from 'src/app/interfaces/article.interfaces';
import { NewsServiceService } from 'src/app/services/news/news-service.service';

@Component({
  selector: 'app-p-posts',
  templateUrl: './p-posts.component.html',
  styleUrls: ['./p-posts.component.scss'],
})
export class PPostsComponent {
  articles: IArticle[] = [];
  constructor(newsService: NewsServiceService) {
    newsService.getArticles().then((articles) => {
      this.articles = articles;
    })
  }
}
