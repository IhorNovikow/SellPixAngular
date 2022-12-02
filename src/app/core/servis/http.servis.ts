import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game, ansverServ } from '../../data/some.serv.data';

@Injectable({ providedIn: 'root' })

export class HttpServis {
  result: Game[] = ansverServ;
  api: string = 'https://serv-sell-pix.vercel.app';
  previewGame: Game[] = this.result.filter((el) => {
    return el.category.preview;
  });
  constructor(
    private http: HttpClient,
  ) {}

  getData() {
    
    this.http.get<Game[]>('https://serv-sell-pix.vercel.app/get/games')
      .subscribe((response) => {
        this.result = response;
        this.previewGame = response.filter((el) => {
          return el.category.preview;
        });
      });

  }
}
