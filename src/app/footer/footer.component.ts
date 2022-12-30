import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    byerList:string[] = [
    'Гарантии',
    'О нашем магазине',
    'Поддержка',
    'Блог',
  ]

  info:string[] = [
    'Польз. соглашение',
    'Возвраты',
    'Политика конф',
  ]

  constructor() { }

  ngOnInit(): void {
  }
  goUp() {
    window.scrollTo(0,0);
  }
}
