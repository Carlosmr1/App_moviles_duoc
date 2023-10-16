import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordRecoveryService } from '../password-recovery.service';
import { v4 as uuidv4 } from 'uuid';




@Component({
  selector: 'app-recuperar-con',
  templateUrl: './recuperar-con.page.html',
  styleUrls: ['./recuperar-con.page.scss'],
})


export class RecuperarConPage {
  // se implementa la ruta a esta pagina y el nuevo sericio de recuperar contraseña
  constructor(private router: Router, private recoveryService: PasswordRecoveryService) { }



  onSubmit(correo: string) {
    this.recoveryService.verifcarEmail(correo).subscribe((response) => {
      if ('valid' in response && response.valid) {
        // constante para creacion de token
        const token = uuidv4();
        // constante para almacenar fecha expiracion de token
        const expiryDate = new Date();
        // fija la fecha de expiracion para 5 min despues de ser creada
        expiryDate.setMinutes(expiryDate.getMinutes() + 5);
        // intenta guardar el token en la base de datos
        this.recoveryService.guardarToken(token, correo, expiryDate).subscribe((tokenResponse) => {
          if ('success' in tokenResponse && tokenResponse.success) {
            // this.recoveryService.enviarCorreoRecuperacion(correo, token);
            console.log("El token fue creado con éxito");
          } else {
            console.log("No se puede crear el token");
          }
        },
          (error) => {
            console.error("Error al guardar el token:", error);
          }
        );
      } else {
        // Hacer algo si la dirección de correo electrónico no es válida

      }
    });
  }
}
