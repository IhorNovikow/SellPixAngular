import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Game, ansverServ } from '../../data/some.serv.data';

@Component({
  selector: 'games-page',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  someData: Game[] = ansverServ;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  routeOneGame(id: number){
    this.router.navigate([`/game/${id}`]);
  }
}
