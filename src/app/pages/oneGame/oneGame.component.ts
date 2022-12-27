import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
//import { HttpServis } from '../../core/servis/http.servis';
//import { Game, ansverServ } from '../../data/some.serv.data';
import { GetGameServis } from '../../core/service/getGame.service';
import { GameMongo } from '../../core/interface/mongoGame';

@Component({
  selector: 'game-page',
  templateUrl: './oneGame.component.html',
  styleUrls: ['./oneGame.component.scss'],
})

export class OneGameComponent implements OnInit {
  someGame: GameMongo;
  backgroundImage: string;
  canDraw: boolean = false;

  constructor(// public http: HttpServis,
    private route: ActivatedRoute,
    public getGame: GetGameServis
    ) {}


  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const IDGame: number = Number(params.id)
      this.getGame.getReviews(IDGame)

      this.someGame = <GameMongo>this.getGame.mongoGame.find((el)=>{
         return String(el.digiSellerID) === params.id
      })

      this.backgroundImage = `linear-gradient(
        0deg,
        rgba(20, 15, 54, 0.9) 16.95%,
        rgba(20, 15, 54, 0.549) 44.05%,
        rgba(20, 15, 54, 0) 58.25%
        ), url(${this.someGame.img.big})`;
   });
   this.canDraw = true
  }
}

