import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../../../../data/some.serv.data';

@Component({
  selector: 'description-game',
  templateUrl: './descriptionGame.component.html',
  styleUrls: ['./descriptionGame.component.scss']
})
export class DiscriptionGameComponent implements OnInit {
  @Input() someGame: Game;
  constructor() { }
  ngOnInit(): void {
  }
}
