import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from '../../../../data/some.serv.data';

@Component({
  selector: 'news-baner',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.scss'],
})
export class NewsBanerComponent implements OnInit {
  @Input()newsShow: News;
  backgroundImage: string;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.backgroundImage = `linear-gradient(
      90deg,
      rgba(20, 15, 54, 0.85) 0%,
      rgba(20, 15, 54, 0.5525) 39.77%,
      rgba(20, 15, 54, 0) 51.44%
      ), url(${this.newsShow.img.big})`;
  }
  openNews(id: string){
    this.router.navigate([`/news/${id}`]);
  }
}
