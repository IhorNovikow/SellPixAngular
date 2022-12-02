import { NgModule } from '@angular/core';

import { GamesComponent } from './games.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../Shared/shared.module';

@NgModule({
  declarations: [
    GamesComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      { path:'', component: GamesComponent },
      //{ path: 'game/:id', loadChildren: () => import('../oneGame/oneGame.module').then(mod => mod.OneGameModule) },
      //{ path: '',  loadChildren: () => import('../AuthModule/auth.module').then(mod => mod.AuthModule) },
      /*{ path: '**', component: ErrorComponent, canActivate: [AuthGuard] },*/
    ])],
})
export class GamesModule {}


