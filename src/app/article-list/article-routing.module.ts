import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailComponent } from '../article-detail/article-detail.component';
import { ArticleListComponent } from './article-list.component';
import { ArticleComponent } from './article.compenent';

const routes: Routes = [
  {
    path: 'article',
    component: ArticleComponent, // <== this component can be called `Layout component`
    children: [
      {
        path: '',
        component: ArticleListComponent,
      },
      {
        path: ':slug',
        component: ArticleDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes), // <== config routing
  ],
  declarations: [],
  exports: [RouterModule], // <== exports this NgModule
})
export class ArticleRoutingModule {}
