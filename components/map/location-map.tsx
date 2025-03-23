"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

// Component to handle location updates
const LocationMarker = () => {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);
  const map = useMap();

  // Custom marker icon
  const markerIcon = new Icon({
    iconUrl: "/marker.svg",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  useEffect(() => {
    // Get user's current location
    map.locate({ setView: true, maxZoom: 16 });

    map.on("locationfound", (e: any) => {
      setPosition([e.latlng.lat, e.latlng.lng]);
      map.flyTo(e.latlng, 16);
    });

    map.on("locationerror", (e: any) => {
      setLocationError(e.message);
      console.error("Location error:", e);
    });

    return () => {
      map.off("locationfound");
      map.off("locationerror");
    };
  }, [map]);

  return position ? (
    <Marker position={position} icon={markerIcon}>
      <Popup>
        <div>
          <h3 className="font-medium">Your Location</h3>
          <p className="text-sm">Latitude: {position[0].toFixed(6)}</p>
          <p className="text-sm">Longitude: {position[1].toFixed(6)}</p>
        </div>
      </Popup>
    </Marker>
  ) : locationError ? (
    <div className="absolute top-0 left-0 right-0 bg-red-100 text-red-700 p-2 text-center z-[1000]">
      {locationError}
    </div>
  ) : null;
};

interface LocationMapProps {
  height?: string;
  width?: string;
  className?: string;
}

// The main map component
const MapComponent = ({
  height = "400px",
  width = "100%",
  className = "",
}: LocationMapProps) => {
  return (
    <div className={`relative ${className}`} style={{ height, width }}>
      <MapContainer
        center={[0, 0]}
        zoom={2}
        style={{ height: "100%", width: "100%", borderRadius: "0.5rem" }}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </div>
  );
};

// We need to use dynamic import to avoid SSR issues with Leaflet
const LocationMap = dynamic(() => Promise.resolve(MapComponent), {
  ssr: false,
});

export default LocationMap;
