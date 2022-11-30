import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../Shared/shared.module';
import { OneNewsComponent } from './oneNews.component';

@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      { path:'', component: OneNewsComponent },
      //{ path: 'game/:id', loadChildren: () => import('../oneGame/oneGame.module').then(mod => mod.OneGameModule) },
      //{ path: '',  loadChildren: () => import('../AuthModule/auth.module').then(mod => mod.AuthModule) },
      /*{ path: '**', component: ErrorComponent, canActivate: [AuthGuard] },*/
    ])],
})
export class OneNewsModule {}


