import { Component, OnInit } from '@angular/core';
import { ModalBurgerServis } from '../../../core/service/modalBurger.service';

@Component({
  selector: 'modal-burger',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalBurgerComponent implements OnInit {
  constructor(public ModalBurgerServis: ModalBurgerServis) {}
  ngOnInit(): void {}
}

