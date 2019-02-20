import { Component, OnInit, ViewChild } from "@angular/core";
import { tileLayer, latLng, marker, icon, Map, circle } from "leaflet";

declare var L;

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {
  streetMaps = tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    detectRetina: true,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  copleyFormalLounge = marker([38.908513, -77.072924], {
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: "leaflet/marker-icon.png",
      shadowUrl: "leaflet/marker-shadow.png"
    }),
    title: "Copley Formal Lounge"
  });

  newNorth = marker([38.907636, -77.073493], {
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: "leaflet/marker-icon.png",
      shadowUrl: "leaflet/marker-shadow.png"
    }),
    title: "New North"
  });

  // add   [leafletLayersControl]
  // to leaflet div to enable layer control panel on map
  // layersControl = {
  //   baseLayers: {
  //     "Street Maps": this.streetMaps,
  //     "Wikimedia Maps": this.wMaps
  //   },
  //   overlays: {
  //     "Copley Formal Lounge": this.copleyFormalLounge,
  //     "New North": this.newNorth
  //   }
  // };

  // for [leafletLayers]
  layers = [this.streetMaps, this.newNorth, this.copleyFormalLounge];

  // for [leafletOptions]
  options = {
    zoom: 16,
    center: latLng(38.9085, -77.073493) // offset N from new north to compensate for the popup
  };

  popup: any;

  popupText(title, subtitle) {
    return `<h3 class="title is-6">${title}</h3>
      <p class="subtitle is-6">${subtitle}</p>`;
  }

  constructor() {}

  ngOnInit() {
    this.copleyFormalLounge.bindPopup(
      this.popupText("Copley Formal Lounge", "Keynote Presentation")
    );

    this.newNorth.bindPopup(
      this.popupText("New North Bldg.", "Primary Location")
    );

    this.popup = L.popup()
      .setLatLng([38.907636, -77.073493])
      .setContent(this.popupText("New North Bldg.", "Primary Location"));
  }

  onMapReady(map: Map) {
    map.openPopup(this.popup);
  }
}
