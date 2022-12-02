import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { News, someNews } from '../../data/some.serv.data';

@Component({
  selector: 'oneNews-page',
  templateUrl: './oneNews.component.html',
  styleUrls: ['./oneNews.component.scss'],
})
export class OneNewsComponent implements OnInit {
  fullNews: News[] = someNews;
  someNews: News;
  backgroundImage: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {

      this.someNews = <News>this.fullNews.find((el)=>{
         return el._id === params.id
      })

      this.backgroundImage = `linear-gradient(
        0deg,
        rgba(20, 15, 54, 0.9) 16.95%,
        rgba(20, 15, 54, 0.549) 44.05%,
        rgba(20, 15, 54, 0) 58.25%
        ), url(${this.someNews.img.big})`;
   });
  }

}
