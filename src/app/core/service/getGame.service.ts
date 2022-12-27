import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  DigiGame,
  DigiReview,
  HashReview,
  HashReviewItem,
} from '../interface/digiGame';
import { GameMongo } from '../interface/mongoGame';

@Injectable({ providedIn: 'root' })
export class GetGameServis {
  responseGame: DigiGame[];
  responseReviews: DigiReview;
  mongoGame: GameMongo[];
  previewGame: GameMongo[];
  HashReview: HashReview = {};

  MongoApi: string = 'https://serv-sell-kbk6mrmj3-ihornovikow.vercel.app';

  constructor(private http: HttpClient) {}

  getInfo() {
    this.http
      .get<GameMongo[]>(`${this.MongoApi}/get/games`) // делаем запрос на свой сервак
      .subscribe((response) => {
        this.mongoGame = response;
        let idGame: string = '';
        response.forEach((el) => {
          idGame.length === 0
            ? (idGame = el.digiSellerID)
            : (idGame = idGame + ',' + el.digiSellerID);
        });
        this.getGame(idGame); // делаем запрос на дигиселлер
      });
  }

  getGame(id: string) {
    const digiApi: string = `https://api.digiseller.ru/api/products/list?ids=${id}`;
    this.http.get<DigiGame[]>(digiApi).subscribe((response) => {
      this.responseGame = response;
      response.forEach((el) => {
        this.mongoGame.forEach((staticEl) => {
          if (staticEl.digiSellerID === String(el.id)) {
            staticEl.price.priceNow = el.price_rub;
            let a = el.name.split('');
            a.some(function (el3, index): Boolean | void {
              //чистим название игры от всякого
              if (el3.charCodeAt(0) > 1110 && index !== 0) {
                staticEl.title = a.splice(1, index - 1).join('');
                return true;
              }
            });

            staticEl.discription.discription = el.info;
            const arr = [
              /<delivery>/g,
              /<\/delivery>/g,
              /<\/attention>/g,
              /<attention>/g,
            ];
            arr.forEach((el) => {
              // чистим описание от всякого
              staticEl.discription.discription =
                staticEl.discription.discription.replace(el, '');
            });
          }
        });
      });
      this.previewGame = this.mongoGame.filter((el) => {
        return el.category.preview;
      });
    });
  }

  getReviews(id: number) {
    let time = new Date().getHours() - this.HashReview?.id?.date?.getHours();
    if (this.HashReview.id === undefined || time > 24) {
      const oneGame = <DigiGame>this.responseGame.find((el) => el.id === id);
      this.http
        .get<DigiReview>(
          `https://api.digiseller.ru/api/reviews?seller_id=${oneGame.id_seller}&product_id=${id}`
        )
        .subscribe((response) => {
          let a: HashReviewItem = {
            answer: response,
            date: new Date(),
          };
          this.HashReview[id] = a;

          if (typeof this.HashReview[id].answer.review === 'undefined') {
            this.HashReview[id].answer.review = [];
          }else {
            this.HashReview[id].answer.review.forEach(el => {
              let a =  el.dateUtc.split('.')
              let b = a[1]
              a[1] = a[0]
              a[0] = b
              el.dateUtc = a.join('.')
            })
          }
          this.responseReviews = this.HashReview[id].answer;
        });
    } else {
      this.responseReviews = this.HashReview[id].answer;
    }
  }
}
