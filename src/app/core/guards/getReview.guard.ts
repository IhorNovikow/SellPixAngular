import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { GetGameServis } from '../service/getGame.service';

@Injectable({ providedIn: 'root' })

export class GetReviewGuard implements CanActivate {
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,

    private http: GetGameServis
    ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    let a: Params | undefined | string
    this.activeRoute.params.subscribe((params: Params) => {
      if(params){
        a = params
      }else{
        a = undefined
      }
    })

    console.log({'a': String(a)})
    if(a === undefined){
      this.router.navigate([`/game/${a}`], {});
      return false
    } else{
      return true
    }
  }

}
