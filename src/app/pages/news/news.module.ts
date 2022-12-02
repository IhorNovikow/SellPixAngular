import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../Shared/shared.module';
import { NewsComponent } from './news.component';
import { NewsBanerComponent } from './components/baner/baner.component';

@NgModule({
  declarations: [
    NewsComponent,
    NewsBanerComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: NewsComponent },
    ]),
  ],
})
export class NewsModule {}
