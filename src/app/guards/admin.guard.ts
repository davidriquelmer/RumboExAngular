import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {Location} from '@angular/common';

@Injectable({

  providedIn: 'root'

})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private loc: Location) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    {
      if (Boolean(sessionStorage.getItem('logged')) && sessionStorage.getItem('role') === 'admin') {
        return true;
      }
      else {
        this.loc.back();
      }
      return false;
    }
  }
}
