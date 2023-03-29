import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailComponent } from '../article-detail/article-detail.component';
import { ArticleListComponent } from './article-list.component';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.compenent';

@NgModule({
  imports: [CommonModule, ArticleRoutingModule],
  declarations: [ArticleComponent,ArticleListComponent, ArticleDetailComponent],
})
export class ArticleModule {}
