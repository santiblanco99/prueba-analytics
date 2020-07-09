import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'
import * as environment from '../../../environments/environment'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map;
  style = `mapbox://styles/mapbox/streets-v11`;
  // Coordenadas de la localización donde queremos centrar el mapa
  lat = 43.1746;
  lng = -2.4125;
  zoom = 15;
  constructor() {
    // Asignamos el token desde las variables de entorno
    this.mapbox.accessToken = environment.environment.mapBoxToken
  }
  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [30.5, 50.5]
    });
    this.map.addControl(new mapboxgl.NavigationControl());
  }

  ngOnInit(): void {
    this.buildMap();
    var marker = new mapboxgl.Marker()
      .setLngLat([30.5, 50.5])
      .addTo(this.map);
  }



}
