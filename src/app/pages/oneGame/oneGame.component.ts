import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpServis } from '../../core/servis/http.servis';
import { Game, ansverServ } from '../../data/some.serv.data';

@Component({
  selector: 'game-page',
  templateUrl: './oneGame.component.html',
  styleUrls: ['./oneGame.component.scss'],
})

export class OneGameComponent implements OnInit {
  someGame: Game;
  someAnsver: Game[] = ansverServ;
  backgroundImage: string;
  constructor( public http: HttpServis,
    private route: ActivatedRoute,
    ) {}


  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {

      this.someGame = <Game>this.http.result.find((el)=>{
         return el._id === params.id
      })
      this.backgroundImage = `linear-gradient(
        0deg,
        rgba(20, 15, 54, 0.9) 16.95%,
        rgba(20, 15, 54, 0.549) 44.05%,
        rgba(20, 15, 54, 0) 58.25%
        ), url(${this.someGame.img.big})`;
   });
  }

}
