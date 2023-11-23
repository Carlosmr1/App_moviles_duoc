import { Component,ElementRef, ViewChild, /*Agregado para otras funcionalidades */ OnInit } from '@angular/core';
//Agregué para animación
import { Animation, AnimationController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage /* Agregué para animación */ implements OnInit  {
  /* Agregué para animación */
  @ViewChild("title", { read: ElementRef}) title!: ElementRef;
  /* Agregué para animación */
  private animation!: Animation;
  
  constructor( /* Agregué para animación */ private animationCtrl: AnimationController, private router:Router ) {
      
  }
  
  //Agregado para otras funcionalidades
  ngOnInit() {
  }
  IniciosesPage(){
    
    this.router.navigate(['/inicioses'])
  }
  
  /* Agregué para animación */
  ngAfterViewInit() {
    this.animation = this.animationCtrl
    .create()
    .addElement(this.title.nativeElement)
    .duration(1500)
    .iterations(Infinity) //Infinity
    .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
    .fromTo('opacity', '1', '0.2');

    //Lanza la animación
    this.animation.play();

  }
}
