import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../base-de-datos.service';

@Component({
  selector: 'app-rec-con',
  templateUrl: './rec-con.page.html',
  styleUrls: ['./rec-con.page.scss'],
})
export class RecConPage implements OnInit {
  constructor(private router: Router, private api: ApiService) { }

  modPost(contrasena: string, correo : string, nombre : string, telefono: number) {
    var repPassword = (<HTMLInputElement>document.getElementById("reContra")).value;

    var post = {
      contrasena: contrasena,
      correo: correo,
      nombre: nombre,
      telefono: telefono
    }

    if (contrasena === repPassword) {
      this.api.updatePost(correo,post).subscribe(
        (success) => {

          console.log('Contraseña modificada con éxito:', success);
          // Agregar lógica adicional o redireccionamiento aquí si es necesario
          this.router.navigate(['/inicioses'])
        },
        (error) => {
          console.log('Error al modificar la contraseña:', error);
          // Agregar manejo de errores o mensajes de error al usuario aquí
        }
      );
    } else {
      console.log('Las contraseñas no coinciden.');
      // Agregar mensaje de error al usuario si las contraseñas no coinciden
    }
  }
  modificarContra() {
    var id = (<HTMLInputElement>document.getElementById("correo")).value;
    var contra = (<HTMLInputElement>document.getElementById("contra")).value;
    console.log(id);
    this.api.getPost(id).subscribe((res) => {
      var nombre = res["nombre"];;
      var telefono = res["telefono"];
        this.modPost(contra, id, nombre, telefono);
        console.log("Completado");

    }, (error) => {
      console.log(error);
    });

  }

  ngOnInit() {

  }

  inicioses() {


  }
}
