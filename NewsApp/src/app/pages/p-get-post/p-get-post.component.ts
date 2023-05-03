import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IArticle } from 'src/app/interfaces/article.interfaces';
import { NewsServiceService } from 'src/app/services/news/news-service.service';

@Component({
  selector: 'app-p-get-post',
  templateUrl: './p-get-post.component.html',
  styleUrls: ['./p-get-post.component.scss'],
})
export class PGetPostComponent {
  idPost: string = '';
  article?: IArticle;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private newsService: NewsServiceService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.idPost = params['id'];
      if (this.idPost != undefined) {
        this.getArticle().then();
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  async getArticle() {
    try {
      this.article = await this.newsService.getArticleById(this.idPost);
    } catch (ex) {
      this.router.navigate(['/']);
    }
  }

}
