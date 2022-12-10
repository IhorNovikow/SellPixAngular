import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServis } from '../../core/servis/http.servis';
import { ansverServ } from '../../data/some.serv.data';
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
  someAnswer: Game[] = ansverServ;
  somePriviewGame: Game[] = this.someAnswer.filter((el) => {
    return el.category.preview;
  });
  someWidth: string = String(this.somePriviewGame.length * 100) + '%';
  someAllRevie: Review[] = [];


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
    //this.http.getData()
    console.log(this.someAnswer.length)
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

  routeOneGame(id: number){
    this.router.navigate([`/game/${id}`]);
  }
  openNews(id: string){
    this.router.navigate([`/news/${id}`]);
  }
}
