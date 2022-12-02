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
    ]),
  ],
  providers: [],
  bootstrap: [AboutUsComponent]
})
export class AboutUsModule { }
