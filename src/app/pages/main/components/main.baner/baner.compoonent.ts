import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../../../../data/some.serv.data';

@Component({
  selector: 'main-baner',
  templateUrl: './baner.compoonent.html',
  styleUrls: ['./baner.compoonent.scss']
})
export class MainBaner implements OnInit {

  @Input() oneItem: Game;

  backgroundImage: string;
  constructor() { }

  ngOnInit(): void {
    this.backgroundImage = `linear-gradient(
      0deg,
      rgba(20, 15, 54, 0.9) 16.95%,
      rgba(20, 15, 54, 0.549) 44.05%,
      rgba(20, 15, 54, 0) 58.25%
      ), url(${this.oneItem.img.big})`;
  }
}
