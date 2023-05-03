import { Injectable } from '@angular/core';
import { IArticle } from 'src/app/interfaces/article.interfaces';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  urlApi: string = 'https://api.spaceflightnewsapi.net/v3';
  constructor() { }

  getArticles(limit: number = 50): Promise<IArticle[]>{
    return fetch(`${this.urlApi}/articles?_limit=${limit}`)
    .then(response => response.json());
  }

  getArticleById(id: string): Promise<IArticle>{
    return fetch(`${this.urlApi}/articles/${id}`)
    .then(response => response.json());
  }
}
