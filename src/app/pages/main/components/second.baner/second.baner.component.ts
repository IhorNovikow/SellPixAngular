import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../../../../data/some.serv.data';

@Component({
  selector: 'second-baner',
  templateUrl: './second.baner.component.html',
  styleUrls: ['./second.baner.component.scss']
})

export class SecondBanerComponent implements OnInit {
  @Input() baner: Game;
  backgroundImage: string;
  constructor() { }


  ngOnInit(): void {
    this.backgroundImage = `linear-gradient(
      90deg,
      rgba(20, 15, 54, 0.85) 0%,
      rgba(20, 15, 54, 0.5525) 39.77%,
      rgba(20, 15, 54, 0) 51.44%
      ), url(${this.baner.img.big})`;
  }
}

