import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HackerNewsAPIService } from './hackernews-api.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'ngx-moment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoriesComponent } from './stories/stories.component';
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './item/item.component';
import { DomainPipe } from './domain.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoriesComponent,
    FooterComponent,
    ItemComponent,
    DomainPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    MomentModule
  ],
  providers: [
    HackerNewsAPIService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
