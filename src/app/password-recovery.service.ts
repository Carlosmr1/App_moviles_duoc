import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PasswordRecoveryService{
  
  constructor(private platform: Platform, private http: HttpClient) {}
  private apiUrl = 'http://localhost:3000'; // Cambia la URL por la de tu servidor

  enviarCorreo(destinatario: string, asunto: string, cuerpo: string) {
    const data = { destinatario, asunto, cuerpo };
    return this.http.post(`${this.apiUrl}/correo`, data);
  };

}