import { Component, OnInit } from '@angular/core';
import { ModalBurgerServis } from '../core/service/modalBurger.service';
import { ModalSearchServis } from '../core/service/modalSearch.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public ModalBurgerServis: ModalBurgerServis,
    public ModalSearchServis: ModalSearchServis,
    ) {}

  ngOnInit(): void {}
}
