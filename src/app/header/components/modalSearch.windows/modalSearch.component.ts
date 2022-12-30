import { Component, OnInit } from '@angular/core';
import { GetGameServis } from '../../../core/service/getGame.service';
import { ModalSearchServis } from '../../../core/service/modalSearch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'modal-search',
  templateUrl: './modalSearch.component.html',
  styleUrls: ['./modalSearch.component.scss'],
})
export class ModalSearchComponent implements OnInit {
  constructor(
    public ModalSearchServis: ModalSearchServis,
    public GetGameServis: GetGameServis,
    private router:Router
    ) {}
  ngOnInit(): void {}
  routeOneGame(id: string){
    this.router.navigate([`/game/${id}`]);
    this.ModalSearchServis.mooveModal();
  }
}

