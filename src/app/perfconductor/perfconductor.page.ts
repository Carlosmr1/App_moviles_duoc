import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-perfconductor',
  templateUrl: './perfconductor.page.html',
  styleUrls: ['./perfconductor.page.scss'],
})
export class PerfconductorPage implements OnInit {

  

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
  volver(){
    this.router.navigate(['/conductor'])

  }

}
