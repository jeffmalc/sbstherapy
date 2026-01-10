import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// GTA Service Area Locations with coordinates
const serviceLocations = [
  { name: "Toronto", lat: 43.6532, lng: -79.3832, region: "Toronto" },
  { name: "Mississauga", lat: 43.5890, lng: -79.6441, region: "Peel" },
  { name: "Brampton", lat: 43.7315, lng: -79.7624, region: "Peel" },
  { name: "Vaughan", lat: 43.8563, lng: -79.5085, region: "York" },
  { name: "Markham", lat: 43.8561, lng: -79.3370, region: "York" },
  { name: "Richmond Hill", lat: 43.8828, lng: -79.4403, region: "York" },
  { name: "Oakville", lat: 43.4675, lng: -79.6877, region: "Halton" },
  { name: "Burlington", lat: 43.3255, lng: -79.7990, region: "Halton" },
  { name: "Milton", lat: 43.5183, lng: -79.8774, region: "Halton" },
  { name: "Ajax", lat: 43.8509, lng: -79.0204, region: "Durham" },
  { name: "Pickering", lat: 43.8384, lng: -79.0868, region: "Durham" },
  { name: "Whitby", lat: 43.8975, lng: -78.9429, region: "Durham" },
  { name: "Oshawa", lat: 43.8971, lng: -78.8658, region: "Durham" },
  { name: "Aurora", lat: 44.0065, lng: -79.4504, region: "York" },
  { name: "Newmarket", lat: 44.0592, lng: -79.4613, region: "York" },
  { name: "Thornhill", lat: 43.8156, lng: -79.4240, region: "York" },
  { name: "Stouffville", lat: 43.9701, lng: -79.2501, region: "York" },
  { name: "King", lat: 44.0461, lng: -79.5283, region: "York" },
  { name: "Georgina", lat: 44.2990, lng: -79.4325, region: "York" },
  { name: "Uxbridge", lat: 44.1082, lng: -79.1163, region: "Durham" },
];

const regionColors: Record<string, string> = {
  "Toronto": "#8B5CF6",
  "Peel": "#F97316",
  "York": "#0EA5E9",
  "Halton": "#22C55E",
  "Durham": "#EAB308",
};

const ServiceAreaMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState(() => {
    return localStorage.getItem('mapbox_token') || '';
  });
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [tokenInput, setTokenInput] = useState('');

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;

    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-79.3832, 43.7],
        zoom: 8.5,
        pitch: 30,
      });

      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      map.current.on('load', () => {
        setIsMapLoaded(true);

        // Add markers for each location
        serviceLocations.forEach((location) => {
          const el = document.createElement('div');
          el.className = 'custom-marker';
          el.style.cssText = `
            width: 24px;
            height: 24px;
            background-color: ${regionColors[location.region]};
            border: 2px solid white;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 2px 6px rgba(0,0,0,0.3);
            transition: transform 0.2s;
          `;
          el.addEventListener('mouseenter', () => {
            el.style.transform = 'scale(1.3)';
          });
          el.addEventListener('mouseleave', () => {
            el.style.transform = 'scale(1)';
          });

          new mapboxgl.Marker(el)
            .setLngLat([location.lng, location.lat])
            .setPopup(
              new mapboxgl.Popup({ offset: 25 }).setHTML(
                `<div style="padding: 4px 8px;">
                  <strong>${location.name}</strong><br/>
                  <span style="color: #666; font-size: 12px;">${location.region} Region</span>
                </div>`
              )
            )
            .addTo(map.current!);
        });
      });
    } catch (error) {
      console.error('Error initializing map:', error);
      setIsMapLoaded(false);
    }
  };

  const handleTokenSubmit = () => {
    if (tokenInput.trim()) {
      localStorage.setItem('mapbox_token', tokenInput.trim());
      setMapboxToken(tokenInput.trim());
      initializeMap(tokenInput.trim());
    }
  };

  useEffect(() => {
    if (mapboxToken) {
      initializeMap(mapboxToken);
    }

    return () => {
      map.current?.remove();
    };
  }, []);

  const regions = [
    { name: "Toronto", color: "#8B5CF6" },
    { name: "Peel", color: "#F97316" },
    { name: "York", color: "#0EA5E9" },
    { name: "Halton", color: "#22C55E" },
    { name: "Durham", color: "#EAB308" },
  ];

  return (
    <section id="service-area" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Service Areas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide in-home autism therapy across the Greater Toronto Area and surrounding regions
          </p>
        </div>

        {!mapboxToken ? (
          <div className="max-w-md mx-auto bg-card p-6 rounded-xl border shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Enter Mapbox Token</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              To display the interactive map, please enter your Mapbox public token. 
              Get one free at <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
            </p>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="pk.eyJ1..."
                value={tokenInput}
                onChange={(e) => setTokenInput(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleTokenSubmit}>Load Map</Button>
            </div>
          </div>
        ) : (
          <div className="relative">
            <div 
              ref={mapContainer} 
              className="w-full h-[500px] rounded-xl shadow-lg overflow-hidden"
            />
            
            {/* Region Legend */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-sm mb-2 text-foreground">Regions</h4>
              <div className="space-y-1.5">
                {regions.map((region) => (
                  <div key={region.name} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: region.color }}
                    />
                    <span className="text-xs text-foreground">{region.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Service Area List */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {serviceLocations.map((location) => (
            <div 
              key={location.name}
              className="flex items-center gap-2 bg-card px-3 py-2 rounded-lg border"
            >
              <div 
                className="w-2 h-2 rounded-full flex-shrink-0" 
                style={{ backgroundColor: regionColors[location.region] }}
              />
              <span className="text-sm text-foreground">{location.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaMap;
