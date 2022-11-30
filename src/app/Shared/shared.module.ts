import { NgModule } from '@angular/core';
import { GameCardComponent } from './components/card.game/card.component';
import { ReviewCardComponent } from './components/card.review/card.component';
import { CardNewsComponent } from './components/card.news/card.component';
import { CommonModule } from '@angular/common';
import { HeaderSectionComponent } from './components/header.sections/header.sections.component';
import { ConfidenceCardComponent } from './components/confidence.card/confidence.card';
import { TitlePageComponent } from './components/titlePage/titlePage.component';
import { CategoryButtonComponent } from './components/categoryButton/category.button.component';

@NgModule({
  declarations: [
    HeaderSectionComponent,
    GameCardComponent,
    ReviewCardComponent,
    CardNewsComponent,
    ConfidenceCardComponent,
    TitlePageComponent,
    CategoryButtonComponent
  ],
  imports: [CommonModule],
  providers: [],
  bootstrap: [],
  exports: [
    GameCardComponent,
    ReviewCardComponent,
    CardNewsComponent,
    HeaderSectionComponent,
    ConfidenceCardComponent,
    TitlePageComponent,
    CategoryButtonComponent,
  ],
})
export class SharedModule {}
