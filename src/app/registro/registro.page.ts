import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../base-de-datos.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage implements OnInit {

  conductor = 0 ;
  constructor(private router:Router, private api : ApiService) {}
  chConductor: boolean = false;
  // metodo crear post
  createPost(){
    //variables para obtener los datos del imput
    if(this.chConductor){
      this.conductor = 1
    }else{
      this.conductor = 0
    }
    var nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    var apellido = (<HTMLInputElement>document.getElementById("apellido")).value;
    var fono = (<HTMLInputElement>document.getElementById("fono")).value;
    var contra = (<HTMLInputElement>document.getElementById("contras")).value;
    var correo = (<HTMLInputElement>document.getElementById("mail")).value;
    var conductor = this.conductor;
    

    console.log(contra);
    console.log(nombre);
    // variable que almacena los elementos que se van a postear en este caso contraseña correo nombre y telefono
    var post={
      contrasena: contra,
      correo: correo,
      nombre: nombre + ' ' + apellido,
      telefono: fono,
      conductor: conductor
    };
    // creacion de post => intenta crear el "post" pasando los datos, si tiene exito aparecera por consola success
    this.api.createPost(post).subscribe((success)=>{
    console.log(success);}
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
