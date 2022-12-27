import { Component, Input, OnInit } from '@angular/core';
//import { Game } from '../../../../data/some.serv.data';
import { GameMongo } from '../../../../core/interface/mongoGame';

@Component({
  selector: 'buy-game',
  templateUrl: './buyGame.component.html',
  styleUrls: ['./buyGame.component.scss']
})
export class BuyGameComponent implements OnInit {
  @Input() someGame: GameMongo;
  constructor() { }
  ngOnInit(): void {
  }
}

