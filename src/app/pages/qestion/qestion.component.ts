import { Component, OnInit } from '@angular/core';
import { Qestion, someQestion } from '../../data/question';

@Component({
  selector: 'qestion-page',
  templateUrl: './qestion.component.html',
  styleUrls: ['./qestion.component.scss'],
})
export class QestionComponent implements OnInit {
  description: string = `Несмотря на то, что наша поддержка
  работает круглосуточно и всегда готова
  предоставить вам ответ на любой вопрос
  касательно работы магазина, мы советуем
  сперва пробежаться взглядом по старому
  доброму списку часто задаваемых вопросов.`

  someQestion: Qestion[] = someQestion;
  constructor() {}

  ngOnInit(): void {}
}
