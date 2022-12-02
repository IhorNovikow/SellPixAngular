import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../Shared/shared.module';
import { QestionComponent } from './qestion.component';
import { QestionBoxComponent } from './components/qestionBox/qestionBox.component';

@NgModule({
  declarations: [
    QestionComponent,
    QestionBoxComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      { path:'', component: QestionComponent },
    ])],
})
export class QestionModule {}


