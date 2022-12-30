import { Component, Input, OnInit } from '@angular/core';
//import { Game } from '../../../../data/some.serv.data';
import { DigiReview } from '../../../../core/interface/digiGame';

@Component({
  selector: 'review-game',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})

export class ReviewComponent implements OnInit {
  @Input() reviews: DigiReview | undefined;
  constructor() {}
  ngOnInit(): void {
  }
}
