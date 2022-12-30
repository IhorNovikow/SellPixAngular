import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
//import { Game } from '../../../../data/some.serv.data';
import { GameMongo } from '../../../../core/interface/mongoGame';

@Component({
  selector: 'specification-game',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.scss'],
})
export class SpecificationGameComponent implements OnInit {
  @Input() someGame: GameMongo;
  @Input() view: string;

  @ViewChild('spec') spec: ElementRef;
  @ViewChild('sist') sist: ElementRef;
  @ViewChild('activ') activ: ElementRef;
  constructor() {}
  ngOnInit(): void {}

  viewSpec(id: string) {
    if (id === 'spec') {
      this.view = this.someGame.discription.discription;
      this.spec.nativeElement.classList.add('title-description-active');
      this.sist.nativeElement.classList.remove('title-description-active');
      this.activ.nativeElement.classList.remove('title-description-active');
    } else if (id === 'sist') {
      this.view = this.someGame.discription.systemRequirements;
      this.spec.nativeElement.classList.remove('title-description-active');
      this.sist.nativeElement.classList.add('title-description-active');
      this.activ.nativeElement.classList.remove('title-description-active');
    } else if (id === 'activ') {
      this.view = this.someGame.discription.activation;
      this.spec.nativeElement.classList.remove('title-description-active');
      this.sist.nativeElement.classList.remove('title-description-active');
      this.activ.nativeElement.classList.add('title-description-active');
    }
  }
}
