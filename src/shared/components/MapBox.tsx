"use client";

import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

interface MapBoxProps {
  width?: string;
  height?: string;
  style?: string;
}

const MapBox = ({ width, height, style }: MapBoxProps) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if(!mapContainerRef.current){
      return;
    }

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: style || "mapbox://styles/mapbox/streets-v11",
      center: [-122.4194, 37.7749],
      zoom: 11,
      attributionControl: false
    });

    map.getCanvas().style.cursor = "grab";

    return () => map.remove();
  }, []);

  return (
    <div ref={mapContainerRef} style={{ width: width, height: height }} />
  )
}

export default MapBox