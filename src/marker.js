const mapboxgl = require("mapbox-gl");
mapboxgl.accessToken = "pk.eyJ1IjoiYmZzaWx2YSIsImEiOiJjajhicWV2ZzQwMHB1MnpwbWxjMnFiaTRjIn0.I41FmFw5Nfu85_M0aCXhtg";


markerMaker = (whereParam, typeParam, map) => {
    var typeObj = {
        Hotel : "../png/pine.png",
        Activity : "../png/beach.png",
        Food : "http://i.imgur.com/cqR6pUI.png"
    }
    console.log("Even Better Morning!");
    const markerDomEl = document.createElement("div");
    markerDomEl.style.zIndex = 2;
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";              //Marker Picture vvvv
    // markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
    // new mapboxgl.Marker(markerDomEl).setLngLat([ -74.009151, 40.705086]).addTo(map);
    markerDomEl.style.backgroundImage = "url(" + typeObj[typeParam] + ")";
    return new mapboxgl.Marker(markerDomEl).setLngLat(whereParam).addTo(map);

}


module.exports = {
    markerMaker: markerMaker
}