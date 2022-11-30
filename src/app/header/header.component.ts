import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  itemNav: string[] = [
    'О нашем магазине',
    'Гарантии магазина',
    'Отзывы о магазине',
    'Вопрос-ответ',
    'Интересные статьи',
    'Сотрудничество',
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  routerToPage() {
    const message: string =
      'sorry, i havent this page. it page in stage development';
    alert(message);
  }
}
