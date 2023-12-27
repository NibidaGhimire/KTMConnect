import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Track = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const fetchFakeBusLocation = async () => {
      try {
        const response = await axios.get('http://localhost:3000/fake-bus-location'); 
        const { latitude, longitude } = response.data;
        updateMap(parseFloat(latitude), parseFloat(longitude));
      } catch (error) {
        console.error('Error fetching fake bus location:', error);
      }
    };

    const updateMap = (latitude, longitude) => {
      if (!map) return;
      const newLocation = { lat: latitude, lng: longitude };

      new window.google.maps.Marker({
        position: newLocation,
        map: map,
        title: 'Bus Location',
      });

      map.setCenter(newLocation);
    };

    const interval = setInterval(fetchFakeBusLocation, 5000); 

    return () => clearInterval(interval);
  }, [map]);

  const mapRef = React.useRef();

  useEffect(() => {
    if (!map) {
      const googleMapScript = document.createElement('script');
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=`;
      window.document.body.appendChild(googleMapScript);

      googleMapScript.addEventListener('load', () => {
        const newMap = new window.google.maps.Map(mapRef.current, {
          center: { lat: 0, lng: 0 }, 
          zoom: 12,
        });
        setMap(newMap);
      });
    }
  }, [map]);

  return <div ref={mapRef} style={{ width: '100%', height: '500px' }} />;
};

export default Track;
