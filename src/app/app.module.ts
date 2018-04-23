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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoriesComponent,
    FooterComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [
    HackerNewsAPIService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
