import { Component, OnInit, inject } from '@angular/core';
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
  emailElastic = inject (PasswordRecoveryService);
  constructor(private router: Router, private recoveryService: PasswordRecoveryService, private api: ApiService) { }



  validar() {
    var correo = (<HTMLInputElement>document.getElementById("correo")).value;
    console.log(correo);
    
    // validacion

    this.emailElastic.sendEmail(correo);
    
}

}