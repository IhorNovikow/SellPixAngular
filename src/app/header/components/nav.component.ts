import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-header',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  itemNav: string[] = [
    'О нашем магазине',
    'Гарантии магазина',
    'Отзывы о магазине',
    'Вопрос-ответ',
    'Интересные статьи',
    'Сотрудничество',
  ];

  constructor() {}

  ngOnInit(): void {}

  routerToPage() {
    const message: string =
      'sorry, i havent this page. it page in stage development';
    alert(message);
  }
}

