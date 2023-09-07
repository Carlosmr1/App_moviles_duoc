import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicioses',
  templateUrl: './inicioses.page.html',
  styleUrls: ['./inicioses.page.scss'],
})
export class IniciosesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  principal(){
    
      this.router.navigate(['/principal'])
    }
  
  registro(){
    this.router.navigate(['/registro'])
  }
  
  recuperar(){
    this.router.navigate(['/recuperar-con'])
  }
}
