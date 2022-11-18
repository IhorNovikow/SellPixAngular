import { Component, OnInit } from '@angular/core';
import {
  ansverServ,
  Game,
  Review,
  someNews,
  News,
} from '../data/some.serv.data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  allGame: Game[] = ansverServ;
  allReview: Review[] = [];
  previewGame: Game[] = ansverServ.filter((el) => {
    return el.category.preview;
  });
  secondBaner: Game;
  viewNews: News[] = someNews.slice(0, 3);
  width: string;
  left: string = '0';
  constructor() {}

  ngOnInit(): void {
    console.log(this.viewNews);
    this.width = String(this.previewGame.length * 100) + '%';
    ansverServ.forEach((el) => {
      this.allReview = this.allReview.concat(el.reviews);
      if (el.category.secondBaner) {
        this.secondBaner = el;
      }
    });
  }
  getId(id: string) {
    this.left = String(-Number(id) * 100 + 100) + '%';
  }
}
