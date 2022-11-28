import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../../../../data/some.serv.data';

@Component({
  selector: 'buy-game',
  templateUrl: './buyGame.component.html',
  styleUrls: ['./buyGame.component.scss']
})
export class BuyGameComponent implements OnInit {
  @Input() someGame: Game;
  constructor() { }
  ngOnInit(): void {
  }
}

