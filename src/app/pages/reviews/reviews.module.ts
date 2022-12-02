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
      //{ path: 'game/:id', loadChildren: () => import('../oneGame/oneGame.module').then(mod => mod.OneGameModule) },
      //{ path: '',  loadChildren: () => import('../AuthModule/auth.module').then(mod => mod.AuthModule) },
      /*{ path: '**', component: ErrorComponent, canActivate: [AuthGuard] },*/
    ])],
})
export class ReviewsModule {}


