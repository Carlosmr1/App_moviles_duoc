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
  
  // metodo crear post
  createPost(){
    //variables para obtener los datos del imput
    var nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    var apellido = (<HTMLInputElement>document.getElementById("apellido")).value;
    var fono = (<HTMLInputElement>document.getElementById("fono")).value;
    var contrasena = (<HTMLInputElement>document.getElementById("contra")).value;
    var correo = (<HTMLInputElement>document.getElementById("correo")).value;
    // variable que almacena los elementos que se van a postear en este caso contraseña correo nombre y telefono
    var post={
      contrasena: contrasena,
      correo: correo,
      nombre: nombre + ' ' + apellido,
      telefono: fono
    };
    // creacion de post => intenta crear el "post" pasando los datos, si tiene exito aparecera por consola success
    this.api.createPost(post).subscribe((success)=>{
    console.log(success);}
    // si no tiene exito aparecera error
    ,error=>{
    console.log(error);
    })
  }
  // este metodo esta aqui solo para devolver por consola el correo que fue creado como clave primaria en la base de datos
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
