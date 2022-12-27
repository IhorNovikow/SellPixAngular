import { Component, OnInit } from '@angular/core';
import { GetGameServis } from '../core/service/getGame.service';
import { ModalBurgerServis } from '../core/service/modalBurger.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public getGame: GetGameServis,
    public ModalBurgerServis: ModalBurgerServis
    ) {}

  ngOnInit(): void {}

}
