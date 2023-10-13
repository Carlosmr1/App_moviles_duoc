import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  usuario!: string | null;
  correo!: string | null;
  fono!: number | null;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.usuario = this.authService.getUser();
    this.fono = this.authService.getFono();
    this.correo = this.authService.getMail();
    console.log(this.usuario);
  }
  cerrar(){
    this.router.navigate(['/home'])}

  map(){
    this.router.navigate(['/mapa'])
  }
  per(){
    this.router.navigate(['/perfil'])
  }
  calendar(){
    this.router.navigate(['/reserva'])
  }
  
  mapa(){
    this.router.navigate(['/mapa'])
  }
  
}
