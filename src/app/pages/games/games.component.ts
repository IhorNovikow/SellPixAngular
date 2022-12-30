import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GetGameServis } from '../../core/service/getGame.service';

@Component({
  selector: 'games-page',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  constructor(private router: Router,
    public http: GetGameServis
    ) {}

  ngOnInit(): void {}

  routeOneGame(id: string){
    this.router.navigate([`/game/${id}`]);
  }
}
