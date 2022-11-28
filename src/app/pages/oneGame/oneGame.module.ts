import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OneGameComponent } from './oneGame.component';
import { TitlePageComponent } from './components/titlePage/titlePage.component';
import { DiscriptionGameComponent } from './components/descriptionGame/descriptionGame.component';
import { BuyGameComponent } from './components/buyGame/buyGame.component';
import { SpecificationGameComponent } from './components/specificationGame/specification.component';
import { CaruselComponent } from './components/carusel/carusel.component';
import { ReviewComponent } from './components/review/review.component';

@NgModule({
  declarations: [
    OneGameComponent,
    TitlePageComponent,
    DiscriptionGameComponent,
    BuyGameComponent,
    SpecificationGameComponent,
    CaruselComponent,
    ReviewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: OneGameComponent },
      //{ path: '',  loadChildren: () => import('../AuthModule/auth.module').then(mod => mod.AuthModule) },
      /*{ path: '**', component: ErrorComponent, canActivate: [AuthGuard] },*/
    ]),
  ],
})
export class OneGameModule {}
