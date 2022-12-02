import { NgModule } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { MainBaner } from './components/main.baner/baner.compoonent';
import { SecondBanerComponent } from './components/second.baner/second.baner.component';

@NgModule({
  declarations: [
    MainComponent,
    MainBaner,
    SecondBanerComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      { path:'', component: MainComponent },
      { path: 'game/:id', loadChildren: () => import('../oneGame/oneGame.module').then(mod => mod.OneGameModule) },
      { path: 'news', loadChildren: () => import('../news/news.module').then(mod => mod.NewsModule) },
      { path: 'news/:id', loadChildren: () => import('../oneNews/oneNews.module').then(mod => mod.OneNewsModule) },
    ])],
    exports: [],
})
export class MainModule {}
