import { Component, Input, OnInit } from '@angular/core';
//import { Game } from '../../../../data/some.serv.data';
import { GameMongo } from '../../../../core/interface/mongoGame';

@Component({
  selector: 'description-game',
  templateUrl: './descriptionGame.component.html',
  styleUrls: ['./descriptionGame.component.scss']
})
export class DiscriptionGameComponent implements OnInit {
  @Input() someGame: GameMongo;
  constructor() { }
  ngOnInit(): void {
  }
}
