import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Define the map container style
const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "15px",
  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
  overflow: "hidden",
};

// Initial US view
const initialCenter = {
  lat: 39.8283, // Approximate center of the US
  lng: -98.5795,
};

// Target business location
const finalCenter = {
  lat: 32.9504,  // Coppell, TX coordinates
  lng: -97.0403,
};

// Light mode map styling
const options = [
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

// Custom map options
const mapOptions = {
  styles: options,
  disableDefaultUI: true,
  zoomControl: false,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
  scrollwheel: false,
  draggable: false,
};

const GoogleMapComponent = () => {
  const [zoom, setZoom] = useState(8); // Start zoomed out at US level
  const [map, setMap] = useState(null); // Store the map instance

  useEffect(() => {
    if (map) {
      let currentZoom = 8;
      const zoomInterval = setInterval(() => {
        if (currentZoom < 15) {
          currentZoom += 0.8; // Smoothly increase zoom level
          map.setZoom(currentZoom);
        } else {
          clearInterval(zoomInterval);
        }
      }, 100); // Step zoom every 200ms (2 seconds total)
    }
  }, [map]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyADPj_B93M0VKwc_WoRAlxM9HdRGCW9Mio">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={finalCenter}
        zoom={zoom}
        options={mapOptions}
        onLoad={(map) => setMap(map)} // Store map instance for zoom control
      >
        {/* Marker for the business location */}
        <Marker position={finalCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;