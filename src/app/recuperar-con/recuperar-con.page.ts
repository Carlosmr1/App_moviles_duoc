import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordRecoveryService } from '../password-recovery.service';
import { ApiService } from '../base-de-datos.service';




@Component({
  selector: 'app-recuperar-con',
  templateUrl: './recuperar-con.page.html',
  styleUrls: ['./recuperar-con.page.scss'],
})


export class RecuperarConPage {
  // se implementa la ruta a esta pagina y el nuevo sericio de recuperar contraseña
  posts = [];
  constructor(private router: Router, private recoveryService: PasswordRecoveryService, private api: ApiService) { }



  validar() {
    var correo = (<HTMLInputElement>document.getElementById("correo")).value;
    console.log(correo);
    
    // validacion
    this.api.getPost(correo).subscribe((res) => {
      console.log("Verificando: CORRESTO");
      this.posts = res["items"];
      this.recoveryService.enviarCorreo(
        correo,
        'Recuperación de Contraseña - DuocOnWheels',
        `Estimado usuario de DuocOnWheels,
      
        Hemos recibido una solicitud de recuperación de contraseña para su cuenta. Para continuar con el proceso de recuperación, haga clic en el siguiente enlace:
      
        http://localhost:8100/rec-con
      
        Si no ha solicitado esta recuperación o considera que es un error, puede ignorar este mensaje.
      
        Por favor, tenga en cuenta que el enlace de recuperación de contraseña es válido por un tiempo limitado. Si no completa el proceso dentro del plazo especificado, deberá iniciar el proceso nuevamente.
      
        Gracias por utilizar DuocOnWheels.
      
        Atentamente,
        El equipo de soporte de DuocOnWheels`)
      .subscribe(
        (response) => {
          console.log('Correo enviado con éxito', response);
        },
        (error) => {
          console.error('Error al enviar el correo', error);
        }
      );

    }, (error) => {
      console.log("Error");
    })
  }
}
