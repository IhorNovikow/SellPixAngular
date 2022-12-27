import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class ModalBurgerServis {
  showModal:boolean = false
  constructor() {}

  mooveModal(){
    this.showModal = !this.showModal
    
    const body = <HTMLElement>document.querySelector('.body');
    const burger = <HTMLElement>document.querySelector('.wrapper-burger');

    body.classList.toggle('stop')
    burger.classList.toggle('active')
  }
}
