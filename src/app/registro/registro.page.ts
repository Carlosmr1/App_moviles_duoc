import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../base-de-datos.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage implements OnInit {
  constructor(private router:Router, private api : ApiService) {}
  
  createPost(){
    var nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    var apellido = (<HTMLInputElement>document.getElementById("apellido")).value;
    var fono = (<HTMLInputElement>document.getElementById("fono")).value;
    var contrasena = (<HTMLInputElement>document.getElementById("contra")).value;
    var correo = (<HTMLInputElement>document.getElementById("correo")).value;

    var post={
      contrasena: contrasena,
      correo: correo,
      nombre: nombre + ' ' + apellido,
      telefono: fono
    };
    
    this.api.createPost(post).subscribe((success)=>{
    console.log(success);}
    ,error=>{
    console.log(error);
    })
  }
   
  getPost(){
    var id = (<HTMLInputElement>document.getElementById("correo")).value;
    console.log(id);
    this.api.getPost(id).subscribe((res)=>{
      console.log(res[0]);
      },(error)=>{
      console.log(error);
      });
     
  }
  ngOnInit() {
    
  }




  inicioses(){
    
    this.router.navigate(['/inicioses'])
  }

}
