import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../../../../data/some.serv.data';

@Component({
  selector: 'game-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class GameCardComponent implements OnInit {
  @Input()oneGame: Game;
  constructor() { }

  ngOnInit(): void {
  }
}
