﻿function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: {lat: 59.9387, lng: 30.3228} 
  });

  setMarkers(map);
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
var beaches = [
  ['Bondi Beach', 59.9387977, 30.3228048, 1], //59.9386917,30.3219533; 59.9387977,30.3228048
];

function setMarkers(map) {
  var image = {
    url: '../img/marker_map.png',
    // This marker is 182 pixels wide by 190 pixels high.
    size: new google.maps.Size(182, 190),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 0)
  };
  
  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };
  for (var i = 0; i < beaches.length; i++) {
    var beach = beaches[i];
    var marker = new google.maps.Marker({
      position: {lat: beach[1], lng: beach[2]},
      map: map,
      icon: image,
      shape: shape,
      title: beach[0],
      zIndex: beach[3]
    });
  }
}