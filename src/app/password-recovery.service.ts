// password-recovery.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
// crear clase para recuperar contraseña con el url de la tabla de usuario en oracle
export class PasswordRecoveryService {
  private recoveryApiUrl = 'https://gf7e859fe572db8-duoconwheels.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/usuario/'; 

  constructor(private http: HttpClient) {}

  verifcarEmail(correo: string) {
    // Realiza una solicitud a tu API para verificar la dirección de correo electrónico
    return this.http.post(`${this.recoveryApiUrl}/verify-email`, { correo });
  }
}
