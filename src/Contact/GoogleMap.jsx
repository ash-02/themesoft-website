import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "15px",
  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
  overflow: "hidden",
};

const businessLocation = {
  lat: 32.9504,
  lng: -97.0403,
};

const mapTheme = [
  {
    "featureType": "all",
    "elementType": "geometry",
    "stylers": [{ "color": "#f5f5f5" }]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{ "color": "#e9e9e9" }]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#9e9e9e" }]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [{ "color": "#ffffff" }]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#757575" }]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [{ "color": "#dadada" }]
  },
  {
    "featureType": "poi",
    "elementType": "labels",
    "stylers": [{ "visibility": "off" }]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{ "visibility": "off" }]
  },
  {
    "featureType": "poi.business",
    "stylers": [{ "visibility": "off" }]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [{ "visibility": "off" }]
  },
  {
    "featureType": "transit",
    "stylers": [{ "visibility": "off" }]
  }
];

const mapConfig = {
  styles: mapTheme,
  disableDefaultUI: true,
  zoomControl: false,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
  scrollwheel: false,
  draggable: false,
};

const GoogleMapComponent = () => {
  const [zoom, setZoom] = useState(8);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (map) {
      let currentZoom = 8;
      const zoomInterval = setInterval(() => {
        if (currentZoom < 15) {
          currentZoom += 0.8;
          map.setZoom(currentZoom);
        } else {
          clearInterval(zoomInterval);
        }
      }, 100);
    }
  }, [map]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyADPj_B93M0VKwc_WoRAlxM9HdRGCW9Mio">
      <GoogleMap
        mapContainerStyle={mapStyle}
        center={businessLocation}
        zoom={zoom}
        options={mapConfig}
        onLoad={(map) => setMap(map)}
      >
        <Marker position={businessLocation} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;