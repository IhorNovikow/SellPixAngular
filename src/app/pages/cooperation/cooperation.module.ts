import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CooperationComponent } from './cooperation.component';
import { SharedModule } from '../../Shared/shared.module';

@NgModule({
  declarations: [
    CooperationComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      { path:'', component: CooperationComponent },
    ])],
})
export class CooperationModule {}


