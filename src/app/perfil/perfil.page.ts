import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../base-de-datos.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuario!: string | null;
  correo!: string | null;
  fono!: number | null;
  constructor(private router: Router, private authService: AuthService) { }



  ngOnInit() {
    const userObject = this.authService.getUser();
    this.usuario = userObject.usuario;
    this.correo = userObject.correo;
    this.fono = this.authService.getFono();
    console.log(this.usuario);
  }
  princ(){
    this.router.navigate(['/principal'])
  }

}
