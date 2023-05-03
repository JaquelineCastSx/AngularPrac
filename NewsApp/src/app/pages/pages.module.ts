import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { TNewsPostComponent } from './templates/t-news-post/t-news-post.component';
import { PPostsComponent } from './p-posts/p-posts.component';
import { PGetPostComponent } from './p-get-post/p-get-post.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    TNewsPostComponent,
    PPostsComponent,
    PGetPostComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
