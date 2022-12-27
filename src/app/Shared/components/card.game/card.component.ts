import { Component, Input, OnInit } from '@angular/core';
import { GameMongo } from '../../../core/interface/mongoGame';

@Component({
  selector: 'game-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class GameCardComponent implements OnInit {
  @Input()oneGame: GameMongo;
  constructor() { }

  ngOnInit(): void {
  }
}
