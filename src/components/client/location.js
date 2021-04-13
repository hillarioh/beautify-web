import React from "react";
import { Loader } from "@googlemaps/js-api-loader";

export default function Location() {
  const loader = new Loader({
    apiKey: "AIzaSyBb7tuNdJ9AF0nAF12e-RK__EpmcetTlt0",
    version: "1.0",
  });
  const shops = [
    { lat: -1.2984334547064942, lng: 36.81353908203416 },
    { lat: -1.30135094705358, lng: 36.8126056733529 },
    { lat: -1.3003426964030949, lng: 36.81529861104251 },
    {
      lat: -1.298422728625476,
      lng: 36.81488018646126,
    },
    { lat: -1.2988732240118526, lng: 36.81198340092384 },
  ];

  loader.load().then(() => {
    let map = new window.google.maps.Map(document.querySelector(".map"), {
      center: { lat: -1.3000638184801152, lng: 36.81363564153752 },
      zoom: 15,
    });
    const mark = shops.map((loc) => {
      let shop = new window.google.maps.Marker({
        position: loc,
        map,
      });
      shop.addListener("click", function () {
        // console.log("hitted");
      });
    });
  });
  return <div className="map"></div>;
}
