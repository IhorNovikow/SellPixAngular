import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../../../../data/some.serv.data';

@Component({
  selector: 'review-game',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})

export class ReviewComponent implements OnInit {
  @Input() someGame: Game;
  constructor() {}
  ngOnInit(): void {
    console.log({'this.someGame.reviews': this.someGame.reviews});
  }
}
//review.component
