import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/main/main.module').then(mod => mod.MainModule) },
  { path: 'aboutShop', loadChildren: () => import('./pages/aboutUs/aboutUs.module').then(mod => mod.AboutUsModule) },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
