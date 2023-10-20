import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../base-de-datos.service';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-inicioses',
  templateUrl: './inicioses.page.html',
  styleUrls: ['./inicioses.page.scss'],
})
export class IniciosesPage implements OnInit {
  posts = [];
  private animation!: Animation;
  isAlertOpen = false;
  confirmacion = false;
  public alertButtons = ['OK'];
  constructor(private router: Router, private api: ApiService, private animationCtrl: AnimationController
    , private authService: AuthService) { }
  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;
  ngOnInit() {

  }





  getId() {
    var correo = (<HTMLInputElement>document.getElementById("correo")).value;
    var contra = (<HTMLInputElement>document.getElementById("contra")).value;
    console.log(correo);
    
    // validacion
    this.api.getPost(correo).subscribe((res) => {
      this.confirmacion = true;
      console.log("Verificando: CORRESTO");
      this.posts = res["items"];
      if(res["contrasena"] == contra){
        const usuario = res["nombre"];
        const fono = res["telefono"];

        this.authService.setDatos(usuario,correo,fono);
        if(res["conductor"]==1){this.router.navigate(['/conductor']);}else{
        this.router.navigate(['/principal']);}
      }else{
        console.log("error")
      }
      
    }, (error) => {
      this.confirmacion = false;
      console.log("Error");
    });

   if(this.confirmacion == false){
      this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(500)
      .iterations(2)
      .keyframes([
        { offset: 0,transform: 'translateX(0px)' },
        { offset: 0.5, transform: 'translateX(10px)' },
        { offset: 1, transform: 'translateX(0px)' },
      ])
      this.animation.play();
    }
  };
  
  
  registro() {
    this.router.navigate(['/registro'])
  }

  recuperar() {
    this.router.navigate(['/recuperar-con'])
  }
}
