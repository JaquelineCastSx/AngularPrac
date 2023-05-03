import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TNewsPostComponent } from './templates/t-news-post/t-news-post.component';
import { PPostsComponent } from './p-posts/p-posts.component';
import { PGetPostComponent } from './p-get-post/p-get-post.component';

const routes: Routes = [
  {path: 'news', component: TNewsPostComponent,
children: [
  {path: '', component: PPostsComponent},
  {path: ':id', component: PGetPostComponent}

] },
  {path: '**', redirectTo: 'news'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
