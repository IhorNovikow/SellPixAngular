import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../../../data/some.serv.data';

@Component({
  selector: 'carusel-game',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.scss'],
})

export class CaruselComponent implements OnInit {
  @Input() someGame!: Game;
  width: string;
  constructor() {}
  ngOnInit(): void {
  this.width = `${this.someGame.photo.length * 328 + 20 * (this.someGame.photo.length-1)}px`

  }
}
