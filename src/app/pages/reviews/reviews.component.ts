import { Component, OnInit } from '@angular/core';
import { Review } from '../../data/some.serv.data';
import { HttpServis } from '../../core/servis/http.servis';

@Component({
  selector: 'reviews-page',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  allReview: Review[] = [];


  constructor(public http: HttpServis) {}

  ngOnInit(): void {
    this.http.result.forEach((el) => {
      this.allReview = this.allReview.concat(el.reviews);
    });
  }
}
