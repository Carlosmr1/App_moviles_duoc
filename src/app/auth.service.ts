import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuario: string | null = null;
  private correo: string | null = null;
  private fono: number | null = null;
  
  setDatos(user: string, correo: string, fono: number): void {
    this.usuario = user;
    this.correo = correo;
    this.fono = fono;
  }

  getUser(): { usuario: string | null, correo: string | null } {
    return { usuario: this.usuario, correo: this.correo };
  }

  getMail(): string | null {
    return this.correo;
  }

  getFono(): number | null {
    return this.fono;
  }

  // Otros métodos relacionados con la autenticación
}
