import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewGame, Game2 } from '../interface/game';
import { Game } from 'src/app/data/some.serv.data';
import { ansverServ } from '../../data/some.serv.data';

@Injectable({ providedIn: 'root' })

export class GetGameServis {
  idGame: string = `
  3417148,
  3415176,
  3415403,
  3412445,
  3415932,
  3415034,
  3424142,
  3415027,
  3435734,
  3435760,
  3435710,
  3414995`
  api: string = `https://api.digiseller.ru/api/products/list?ids=${this.idGame}`;
  someGame: Game[] = ansverServ;
  constructor(
    private http: HttpClient,
  ) {}

  getGame() {
    this.http.get<NewGame[]>(this.api)
      .subscribe((response) => {
        response.forEach( el => {
          this.someGame.forEach(staticEl => {
            if(staticEl._id === el.id){
              staticEl.price.priceNow = el.price_rub
              staticEl.title = el.name
              let a = el.name.split('')
              a.some(function(el3, index):Boolean | void {
                if(el3.charCodeAt(0) > 1110 && index !== 0){
                  staticEl.title = a.splice(1, index-1).join('');
                  return true
                }
              })
              staticEl.discription.discription = el.info
              const searchRegExp = '<delivery>';
              const replaceWith = 'goose';
              // </delivery> <delivery>

              //staticEl.discription.discription = staticEl.discription.discription.replaceAll(searchRegExp, '')

              //const result = 'duck duck go'.replace(searchRegExp, replaceWith);

            }
          })
        })
      });
  }
}
