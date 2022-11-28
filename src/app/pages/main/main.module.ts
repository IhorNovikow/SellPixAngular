import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { MainBaner } from './components/main.baner/baner.compoonent';
import { CategoryButtonComponent } from './components/category.button/category.button.component';
import { SecondBanerComponent } from './components/second.baner/second.baner.component';
import { SharedModule } from '../../Shared/shared.module';

@NgModule({
  declarations: [
    MainComponent,
    MainBaner,
    CategoryButtonComponent,
    SecondBanerComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      { path:'', component: MainComponent },
      { path: 'game/:id', loadChildren: () => import('../oneGame/oneGame.module').then(mod => mod.OneGameModule) },
      //{ path: '',  loadChildren: () => import('../AuthModule/auth.module').then(mod => mod.AuthModule) },
      /*{ path: '**', component: ErrorComponent, canActivate: [AuthGuard] },*/
    ])],
    exports: [],
})
export class MainModule {}
