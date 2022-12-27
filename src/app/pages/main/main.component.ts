import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetGameServis } from '../../core/service/getGame.service';
import { GameMongo } from '../../core/interface/mongoGame';
import { someNews, News } from '../../data/some.serv.data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  secondBaner: GameMongo;
  viewNews: News[] = someNews.slice(0, 3);
  width: string;
  left: string = '0';

  constructor(public http: GetGameServis, private router: Router) {}

  ngOnInit(): void {
    const preiew = this.http.mongoGame?.filter((el) => {
      return el.category.preview;
    });

    this.width = String(preiew?.length * 100) + '%';

    this.http.mongoGame.forEach((el) => {
      if (el.category.secondBaner) {
        this.secondBaner = el;
      }
    });
  }
  getId(id: string) {
    this.left = String(-Number(id) * 100 + 100) + '%';
  }

  routeOneGame(id: string) {
    this.router.navigate([`/game/${id}`]);
  }
  openNews(id: string) {
    this.router.navigate([`/news/${id}`]);
  }
}
