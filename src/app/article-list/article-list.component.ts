import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Article, ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {
  articles$: Observable<Article[]> | undefined;
  constructor(private _api: ArticleService) {}

  ngOnInit(): void {
    this.articles$ = this._api.getArticles();
  }
}
