import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HackerNewsAPIService } from './hackernews-api.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoriesComponent } from './stories/stories.component';
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './item/item.component';
import { ItemCommentsComponent } from './item-comments/item-comments.component';

import { routing } from './app.routes';
import { CommentTreeComponent } from './comment-tree/comment-tree.component';
import { CommentComponent } from './comment/comment.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoriesComponent,
    FooterComponent,
    ItemComponent,
    ItemCommentsComponent,
    CommentTreeComponent,
    CommentComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    routing
  ],
  providers: [
    HackerNewsAPIService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
