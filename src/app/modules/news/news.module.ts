import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from './news-card/news-card.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsRoutingModule } from './news-routing.module';

@NgModule({
  declarations: [
    NewsCardComponent,
    NewsListComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
  providers: []
})

export class NewsModule { }
