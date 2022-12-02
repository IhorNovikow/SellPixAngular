import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'category-button',
  templateUrl: './category.button.component.html',
  styleUrls: ['./category.button.component.scss']
})

export class CategoryButtonComponent implements OnInit {
  category: string[] = [
    'Хиты продаж',
    'Популярное',
    'Новинки',
  ]
  active = '1'
  constructor() { }

  ngOnInit(): void {
  }
}
