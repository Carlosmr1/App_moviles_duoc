import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';

declare var google: any;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
  googleMarker?: any; // Agregamos una propiedad opcional para almacenar la referencia del marcador de Google Maps
}

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  map = null;
  markers: Marker[] = [];
  pressTimer: any;

  constructor(private router: Router) {}
  
  volver() {
    this.router.navigate(['/principal']);
  }

  ngOnInit() {
    this.loadMap();
  }

  async loadMap() {
    // Get the current location of the device
    const coordinates = await Geolocation.getCurrentPosition();

    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map')!;
    
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: {
        lat: coordinates.coords.latitude,
        lng: coordinates.coords.longitude
      },
      zoom: 12
    });

    // Add a marker for the current device location
    const deviceMarker: Marker = {
      position: {
        lat: coordinates.coords.latitude,
        lng: coordinates.coords.longitude
      },
      title: 'Tu ubicación'
    };

    this.addMarker(deviceMarker);

    // Add long press event listener to add markers
    google.maps.event.addListener(this.map, 'mousedown', (event: any) => {
      this.pressTimer = window.setTimeout(() => {
        const pressedPosition = {
          lat: event.latLng.lat(),
          lng: event.latLng.lng()
        };

        const newMarker: Marker = {
          position: pressedPosition,
          title: 'Nuevo marcador'
        };

        this.addMarker(newMarker);
      }, 1000);
    });

    google.maps.event.addListener(this.map, 'mouseup', () => {
      clearTimeout(this.pressTimer);
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
    });
  }

  addMarker(marker: Marker) {
    const newGoogleMarker = new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });

    // Guardar el nuevo marcador directamente en el arreglo
    this.markers.push(marker);

    // Guardar la referencia del marcador en el objeto Marker
    marker.googleMarker = newGoogleMarker;
  }

}
