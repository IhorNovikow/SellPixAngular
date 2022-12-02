import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'confidence-card',
  templateUrl: './confidence.card.html',
  styleUrls: ['./confidence.card.scss']
})

export class ConfidenceCardComponent implements OnInit {
  cardInformation = [
    {
      img: '../assets/icon/main-confidence/key.svg',
      alt: 'key',
      title: 'Официальные ключи',
      discription: `
      Все ключи закупаются у официальных дилеров издателей: 1С, Бука,
      Electronic Arts, NCsoft Europe, и др. Естественно, на такие
      ключи дается пожизненная гарантия. У нас прямая связь с дилерами
      и многие вопросы мы можем решать очень оперативно.`,
    },
    {
      img: '../assets/icon/main-confidence/star.svg',
      alt: 'star',
      title: 'Гарантия качества',
      discription: `
      Идейные соображения высшего порядка, а также рамки и место
      обучения кадров требуют определения и уточнения позиций,
      занимаемых участниками в отношении поставленных задач.
      Разнообразный и богатый опыт`,
    },
    {
      img: '../assets/icon/main-confidence/review.svg',
      alt: 'message',
      title: 'Отзывы на товары',
      discription: `
      Все ключи закупаются у официальных дилеров издателей: 1С, Бука,
      Electronic Arts, NCsoft Europe, и др. Естественно, на такие
      ключи дается пожизненная гарантия. У нас прямая связь с дилерами
      и многие вопросы мы можем решать очень оперативно.`,
    },
    {
      img: '../assets/icon/main-confidence/shield.svg',
      alt: 'shield',
      title: 'Официальные ключи',
      discription: `
      Идейные соображения высшего порядка, а также рамки и место
      обучения кадров требуют определения и уточнения позиций,
      занимаемых участниками в отношении поставленных задач.
      Разнообразный и богатый опыт`,
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
}



//confidence.card
