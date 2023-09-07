import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { GoogleMap} from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  @ViewChild('map')mapRef!: ElementRef;
  map!: GoogleMap;

  constructor() { }
  
  ngOnInit() {
  }

  ionViewDidEnter(){
    this.createMap();
  }

  async createMap() {
    this.map = await GoogleMap.create({
      id: 'mi-mapa',
      apiKey: environment.mapsKey,
      element: this.mapRef.nativeElement,
      forceCreate:true,
      config: {
        center:{
        lat: 33.6,
        lng: -117.9,
        },
        zoom: 8,
      },
      

    })
  }

}
