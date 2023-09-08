import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-con',
  templateUrl: './recuperar-con.page.html',
  styleUrls: ['./recuperar-con.page.scss'],
})
export class RecuperarConPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
   
  }
  cont(){
    this.router.navigate(['/inicioses'])
  }

}
