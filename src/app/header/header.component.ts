import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  itemNav: string[] = [
    'О нашем магазине',
    'Гарантии магазина',
    'Отзывы о магазине',
    'Вопрос-ответ',
    'Интересные статьи',
    'Сотрудничество',
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
