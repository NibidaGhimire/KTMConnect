
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Track = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {

    const fetchFakeBusLocation = async () => {
      try {
        const response = await axios.get('http://localhost:3000/fake-bus-location');
        if (response && response.data) {
          const { latitude, longitude } = response.data;
          updateMap(parseFloat(latitude), parseFloat(longitude));
        } else {
          console.error('Invalid response from server:', response);
        }
      } catch (error) {
        console.error('Error fetching fake bus location:', error.response ? error.response.data : error.message);
      }
    };
    
    const updateMap = (latitude, longitude) => {
      if (!map) return;

      const newLocation = new Microsoft.Maps.Location(latitude, longitude);

      const pin = new Microsoft.Maps.Pushpin(newLocation, {
        title: 'Bus Location',
      });

      if (map.entities.getLength() > 0) {
        map.entities.clear();
      }

      map.entities.push(pin);
      map.setView({ center: newLocation, zoom: 12 });
    };

    const interval = setInterval(fetchFakeBusLocation, 5000);

    return () => clearInterval(interval);
  }, [map]);

  const mapRef = React.useRef();

  useEffect(() => {
    if (!map) {
      const bingMapScript = document.createElement('script');
      bingMapScript.src = 'https://www.bing.com/api/maps/mapcontrol?key=ApL9gk0lzPyXzgDct5B1kxrlkJIpkGBvFRaDYE2gVL3LNehOicd0_367zCh8WZZk&callback=initMap';
      window.document.body.appendChild(bingMapScript);
      window.initMap = () => {
        const newMap = new Microsoft.Maps.Map(mapRef.current, {
          center: new Microsoft.Maps.Location(0, 0),
          zoom: 12,
        });
        setMap(newMap);
      };
    }
  }, [map]);

  return (
    <div ref={mapRef} className='w-full h-screen' />
  )
};

export default Track;


// ApL9gk0lzPyXzgDct5B1kxrlkJIpkGBvFRaDYE2gVL3LNehOicd0_367zCh8WZZk
