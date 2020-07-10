import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'
import * as environment from '../../../environments/environment'
import { CommerceService } from "../../services/commerce.service"
import { Geometry } from 'src/app/models/Geometry';
import { Commerce } from 'src/app/models/Commerce';
import { Feature } from 'src/app/models/Feature';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  //------------------------------
  //map stuff
  //------------------------------
  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map;
  style = `mapbox://styles/mapbox/streets-v11`;
  // Coordenadas de la localización donde queremos centrar el mapa
  lat = 43.1746;
  lng = -2.4125;
  zoom = 10;
  constructor(private commerceService: CommerceService) {
    // Asignamos el token desde las variables de entorno
    this.mapbox.accessToken = environment.environment.mapBoxToken
  }
  buildMap(center: number[]) {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: center
    });
    this.map.addControl(new mapboxgl.NavigationControl());
  }


  //-----------------------
  //variables
  //-----------------------

  commerceMarkers: Feature[];


  ngOnInit(): void {
    //Load map marker data
    this.commerceService.getCommercesLayer().subscribe(initialData => {
      let realData = initialData.features;
      let mappedData = realData.map(element => {
        return {
          properties: element.properties,
          geometry: element.geometry
        } as Feature
      });
      //save marker info
      this.commerceMarkers = mappedData;
      

      //build map with deafult center
      this.buildMap(this.commerceMarkers[3].geometry.coordinates);
      

      //add markers to map
      for (let i = 0; i < this.commerceMarkers.length; i++) {
        let coordinates = this.commerceMarkers[i].geometry.coordinates;
        let info = this.commerceMarkers[i].properties;

        let popupText = info.name != undefined ? `<p><b>${info.name}</b><p>Address: ${info.address}
        </p><p>Schedule: ${info.schedule}</p><p>Contact #: ${info.phone}</p>` : "No info available"

        let marker = new mapboxgl.Marker()
          .setLngLat(coordinates)
          .setPopup(new mapboxgl.Popup().setHTML(popupText))
          .addTo(this.map);
      }
      
    });

  }



}
