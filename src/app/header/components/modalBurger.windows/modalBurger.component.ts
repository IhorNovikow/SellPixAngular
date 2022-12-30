import { Component, OnInit } from '@angular/core';
import { ModalBurgerServis } from '../../../core/service/modalBurger.service';

@Component({
  selector: 'modal-burger',
  templateUrl: './modalBurger.component.html',
  styleUrls: ['./modalBurger.component.scss'],
})
export class ModalBurgerComponent implements OnInit {
  constructor(public ModalBurgerServis: ModalBurgerServis) {}
  ngOnInit(): void {}
}

