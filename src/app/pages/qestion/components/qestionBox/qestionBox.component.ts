import { Component, OnInit, Input } from '@angular/core';
import { Qestion } from '../../../../data/question';

@Component({
  selector: 'qestion-box',
  templateUrl: './qestionBox.component.html',
  styleUrls: ['./qestionBox.component.scss'],
})
export class QestionBoxComponent implements OnInit {
  @Input() qestion: Qestion;
  view: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  open(){
    this.view = !this.view
  }
}



//qestionBox.component
