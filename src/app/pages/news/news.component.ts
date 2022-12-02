import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News, someNews } from '../../data/some.serv.data';

@Component({
  selector: 'news-page',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  fullNews: News[] = someNews;
  newsPreview: News[] = this.fullNews.filter((el) => {
    return el.preview === true

  })

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  openNews(id: string){
    this.router.navigate([`/news/${id}`]);
  }

}
