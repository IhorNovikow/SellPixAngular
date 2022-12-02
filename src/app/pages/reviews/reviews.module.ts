import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../Shared/shared.module';
import { ReviewsComponent } from './reviews.component';

@NgModule({
  declarations: [
    ReviewsComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      { path:'', component: ReviewsComponent },
    ])],
})
export class ReviewsModule {}


