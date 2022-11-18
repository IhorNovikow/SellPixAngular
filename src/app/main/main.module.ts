import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { MainBaner } from './components/main.baner/baner.compoonent';
import { HeaderSectionComponent } from './components/header.sections/header.sections.component';
import { CategoryButtonComponent } from './components/category.button/category.button.component';
import { GameCardComponent } from './components/card.game/card.component';
import { ConfidenceCardComponent } from './components/confidence.card/confidence.card';
import { ReviewCardComponent } from './components/card.review/card.component';
import { SecondBanerComponent } from './components/second.baner/second.baner.component';
import { CardNewsComponent } from './components/card.news/card.component';

@NgModule({
  declarations: [
    MainComponent,
    MainBaner,
    HeaderSectionComponent,
    CategoryButtonComponent,
    GameCardComponent,
    ConfidenceCardComponent,
    ReviewCardComponent,
    SecondBanerComponent,
    CardNewsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path:'', component: MainComponent },
      //{ path: '',  loadChildren: () => import('../AuthModule/auth.module').then(mod => mod.AuthModule) },
      /*{ path: '**', component: ErrorComponent, canActivate: [AuthGuard] },*/
    ])],
})
export class MainModule {}
