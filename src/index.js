const markers = require("./marker.js")

console.log("Good Morning!");

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoiYmZzaWx2YSIsImEiOiJjajhicWV2ZzQwMHB1MnpwbWxjMnFiaTRjIn0.I41FmFw5Nfu85_M0aCXhtg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/light-v9" // mapbox has lots of different map styles available.
});

console.log("Still a Good Morning!");
markers.markerMaker([-87.6354, 41.8885], "Hotel", map);
markers.markerMaker([-87.600, 41.800], "Food", map);
markers.markerMaker([-87.700, 41.900], "Activity", map);