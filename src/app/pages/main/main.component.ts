import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServis } from '../../core/servis/http.servis';
import {
  Game,
  Review,
  someNews,
  News,
} from '../../data/some.serv.data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})

export class MainComponent implements OnInit {
  allReview: Review[] = [];
  secondBaner: Game;
  viewNews: News[] = someNews.slice(0, 3);
  width: string;
  left: string = '0';

  constructor(
    public http: HttpServis,
    private router: Router,
    ) {}

  ngOnInit(): void {
    this.http.getData()
    this.width = String(this.http.previewGame.length * 100) + '%';
    this.http.result.forEach((el) => {
      this.allReview = this.allReview.concat(el.reviews);
      if (el.category.secondBaner) {
        this.secondBaner = el;
      }
    });
  }
  getId(id: string) {
    this.left = String(-Number(id) * 100 + 100) + '%';
  }

  routeOneGame(id: string){
    this.router.navigate([`/game/${id}`]);
  }
  openNews(id: string){
    this.router.navigate([`/news/${id}`]);
  }
}
