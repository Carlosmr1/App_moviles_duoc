import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuario: string | null = null;
  private correo: string | null = null;
  private fono: number | null = null;
  setDatos(correo: string, user: string , fono: number): void {
    this.usuario = user;
    this.correo = correo;
    this.fono = fono;
  }

  getUser(): string | null {
    return this.usuario, this.correo;
  }
  getMail(): string | null {
    return this.correo;
  }
  getFono(): number | null {
    return this.fono;
  }
  // Otros métodos relacionados con la autenticación
}