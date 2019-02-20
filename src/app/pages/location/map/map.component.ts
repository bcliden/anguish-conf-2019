import { Component, OnInit } from "@angular/core";
import { tileLayer, latLng } from "leaflet";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {
  options = {
    layers: [
      tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: "..."
      })
    ],
    zoom: 16,
    center: latLng(38.908513, -77.072924)
  };

  constructor() {}

  ngOnInit() {}
}
