import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ApiService } from '../base-de-datos.service';
import { Viaje } from '../models/viaje.model';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {
  usuario!: string | null;
  correo!: string | null;
  fono!: number | null;
  usuarios : Viaje [] = [];
  constructor(private router: Router, private authService: AuthService, private api: ApiService) { }

  ngOnInit() {
   
    this.getViaje();

  }

  getViaje(){
    this.api.getViaje().subscribe({ 
      next:(res:any)=>{ 
         this.usuarios = res.items
        console.log(this.usuarios)
      }
    });
    
  }
  perfil(){
    this.router.navigate(['/perfconductor'])
  }

  cerrars(){
    this.router.navigate([['/inicioses']])

  }





}
