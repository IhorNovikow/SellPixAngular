import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OneGameComponent } from './oneGame.component';
import { DiscriptionGameComponent } from './components/descriptionGame/descriptionGame.component';
import { BuyGameComponent } from './components/buyGame/buyGame.component';
import { SpecificationGameComponent } from './components/specificationGame/specification.component';
import { CaruselComponent } from './components/carusel/carusel.component';
import { ReviewComponent } from './components/review/review.component';
import { SharedModule } from '../../Shared/shared.module';

@NgModule({
  declarations: [
    OneGameComponent,
    DiscriptionGameComponent,
    BuyGameComponent,
    SpecificationGameComponent,
    CaruselComponent,
    ReviewComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: OneGameComponent },
    ]),
  ],
})
export class OneGameModule {}
