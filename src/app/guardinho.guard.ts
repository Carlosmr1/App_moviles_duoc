import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class guardinho implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // Coloca tu lógica de autorización aquí
    const usuarioAutorizado = true; // Cambia esto con tu lógica real

    if (usuarioAutorizado) {
      return true; // Permite el acceso a la ruta
    } else {
      // Redirige a una ruta diferente si el usuario no está autorizado
      this.router.navigate(['/ruta-de-redireccion']);
      return false;
    }
  }
}