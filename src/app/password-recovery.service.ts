// password-recovery.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from
  '@angular/common/http';
import { Timestamp } from 'rxjs';
// import * as sgMail from '@sendgrid/mail';

@Injectable({
  providedIn: 'root',
})
// crear clase para recuperar contraseña con el url de la tabla de usuario en oracle
export class PasswordRecoveryService {
  private recoveryApiUrl = 'https://gf7e859fe572db8-duoconwheels.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/usuario/';

  constructor(private http: HttpClient) { }

  verifcarEmail(correo: string) {
    // Realiza una solicitud a tu API para verificar la dirección de correo electrónico
    return this.http.post(`${this.recoveryApiUrl}/verify-email`, { correo });
  }
  guardarToken(token: string, correo: string, expiryDate: Date) {
    const tokenData = {
      token: token,
      correo: correo,
      expiryDate: expiryDate.toISOString(), // Convertir la fecha a una cadena ISO EJ: 2023-10-14T15:30:00  
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(this.recoveryApiUrl, tokenData, httpOptions);
  }

  // async enviarCorreoRecuperacion(correoDestino: string, token: string) {
  //   sgMail.setApiKey('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'); // Reemplaza 'TU_CLAVE_API_SENDGRID' por tu clave API de SendGrid

  //   const msg = {
  //     to: 'test@example.com', // Change to your recipient
  //     from: 'test@example.com', // Change to your verified sender
  //     subject: 'Sending with SendGrid is Fun',
  //     text: 'and easy to do anywhere, even with Node.js',
  //     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  //   };

  //   try {
  //     await sgMail.send(msg);
  //     console.log('Correo electrónico enviado con éxito.');
  //   } catch (error) {
  //     console.error('Error al enviar el correo electrónico:', error);
  //   }
  // }

}
