import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class ModalSearchServis {
  showModalSearch:boolean = false;
  showSmallInput: boolean = false;
  searchWord: string = '';
  body = <HTMLElement>document.querySelector('.body');
  constructor() {}

  searchGame(event: Event){
    console.log(event)
  }

  mooveModal(){
    this.showModalSearch = !this.showModalSearch
    this.body.classList.toggle('stop')
    console.log('mooveModal')
  }

  mooveModalSmall(){
    this.showSmallInput = !this.showSmallInput
    this.showModalSearch = !this.showModalSearch
    this.body.classList.toggle('stop')
  }
}
