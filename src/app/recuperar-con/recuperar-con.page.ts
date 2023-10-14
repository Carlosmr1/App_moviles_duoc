import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordRecoveryService } from '../password-recovery.service';


@Component({
  selector: 'app-recuperar-con',
  templateUrl: './recuperar-con.page.html',
  styleUrls: ['./recuperar-con.page.scss'],
})


export class ForgotPasswordComponent {
  constructor(private recoveryService: PasswordRecoveryService) {}

  

  onSubmit(email: string) {
    this.recoveryService.verifcarEmail(email).subscribe((response) => {
      if ('valid' in response && response.valid) {
        // Hacer algo si la dirección de correo electrónico es válida
      } else {
        // Hacer algo si la dirección de correo electrónico no es válida
      }
    });
  }
}
