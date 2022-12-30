import { Component, OnInit } from '@angular/core';
import { GetGameServis } from './core/service/getGame.service';
import { ModalSearchServis } from './core/service/modalSearch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SellPix';
  constructor(
    public getGame: GetGameServis,
    public ModalSearchServis: ModalSearchServis
    ) {}

  ngOnInit(): void {
    this.getGame.getInfo()
  }
}
