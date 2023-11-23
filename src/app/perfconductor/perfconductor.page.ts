import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-perfconductor',
  templateUrl: './perfconductor.page.html',
  styleUrls: ['./perfconductor.page.scss'],
})
export class PerfconductorPage implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  volver(){
    this.router.navigate(['/conductor']);

  }





}
