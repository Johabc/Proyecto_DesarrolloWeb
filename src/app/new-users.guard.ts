import { Injectable } from '@angular/core';
import { flush } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewUsersGuard implements CanActivate {
  canActivate(){
    var usuario = localStorage.getItem('usuario')
    return false;
  }

}
