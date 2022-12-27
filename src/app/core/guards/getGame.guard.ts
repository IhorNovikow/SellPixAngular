import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { GetGameServis } from '../service/getGame.service';



@Injectable({ providedIn: 'root' })

export class GetGameGuard implements CanActivate {
  constructor(
    private router: Router,
    private http: GetGameServis
    ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (/*this.http.serverResponseReceived*/ true) {
      return true;
    } else {
      this.router.navigate(['/'], {});
      return false;
    }
  }
}
