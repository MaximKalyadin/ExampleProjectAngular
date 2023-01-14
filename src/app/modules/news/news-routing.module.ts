import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsCardComponent } from './news-card/news-card.component';
import { NewsListComponent } from './news-list/news-list.component';

const routes: Routes = [{
  path: '',
  data: {
    title: 'News'
  },
  children: [
    {
      path: '',
      component: NewsListComponent,
      data: {
        title: 'News list'
      },
    },
    {
      path: ':id',
      component: NewsCardComponent,
      data: {
        title: 'News'
      },
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
