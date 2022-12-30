import { Component, Input, OnInit } from '@angular/core';
import { News } from '../../../data/some.serv.data';

@Component({
  selector: 'news-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardNewsComponent implements OnInit {
  @Input() oneNews: News;
  backgroundImage: string;
  constructor() {}

  ngOnInit(): void {
    this.backgroundImage = `linear-gradient(
      0deg,
      rgba(20, 15, 54, 0.85) 0%,
      rgba(20, 15, 54, 0.5525) 23.78%,
      rgba(20, 15, 54, 0) 45.15%
      ), url(${this.oneNews.img.average})`;
  }
}
