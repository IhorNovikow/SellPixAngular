import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetGameGuard } from './core/guards/getGame.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/main/main.module').then(mod => mod.MainModule)},
  { path: 'aboutShop', loadChildren: () => import('./pages/aboutUs/aboutUs.module').then(mod => mod.AboutUsModule) },
  { path: 'cooperation', loadChildren: () => import('./pages/cooperation/cooperation.module').then(mod => mod.CooperationModule) },
  { path: 'games', loadChildren: () => import('./pages/games/games.module').then(mod => mod.GamesModule) },
  { path: 'newsPage', loadChildren: () => import('./pages/oneNews/oneNews.module').then(mod => mod.OneNewsModule) },
  { path: 'reviews', loadChildren: () => import('./pages/reviews/reviews.module').then(mod => mod.ReviewsModule) },
  { path: 'qestion', loadChildren: () => import('./pages/qestion/qestion.module').then(mod => mod.QestionModule) },
  { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(mod => mod.ProfileModule) },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
