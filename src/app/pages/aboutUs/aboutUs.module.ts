import { NgModule } from '@angular/core';

import { AboutUsComponent } from './aboutUs.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../Shared/shared.module';


@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      { path:'', component: AboutUsComponent },
      //{ path:'aboutShop', component: AboutUsComponent },
      //{ path: '',  loadChildren: () => import('../AuthModule/auth.module').then(mod => mod.AuthModule) },
      /*{ path: '**', component: ErrorComponent, canActivate: [AuthGuard] },*/
    ]),
  ],
  providers: [],
  bootstrap: [AboutUsComponent]
})
export class AboutUsModule { }
