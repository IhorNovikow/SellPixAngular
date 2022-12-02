import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../Shared/shared.module';
import { OneNewsComponent } from './oneNews.component';

@NgModule({
  declarations: [
    OneNewsComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      { path:'', component: OneNewsComponent },
    ])],
})
export class OneNewsModule {}


