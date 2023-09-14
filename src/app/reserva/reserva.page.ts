import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.page.html',
  styleUrls: ['./reserva.page.scss'],
})
export class ReservaPage implements OnInit {
  isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();
    return utcDay !== 0 && utcDay !== 6;
  };

  constructor(private router:Router) { 

  }

  ngOnInit() {
  }
  volver1(){
    this.router.navigate(['/principal'])

  }
  reser(){
    this.router.navigate(['/mapa'])
  }
}
