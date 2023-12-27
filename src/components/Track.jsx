// // ApL9gk0lzPyXzgDct5B1kxrlkJIpkGBvFRaDYE2gVL3LNehOicd0_367zCh8WZZk

import React, { useEffect, useState } from 'react';

const Track = () => {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([
    { name: 'Sajha 1', latitude: 27.6796000, longitude: 85.3204300, mapObject: null },
    { name: 'Nepal Yatayat 1', latitude: 27.686382, longitude: 85.315399, mapObject: null },
    { name: 'Sajha 2', latitude: 	27.685245, longitude: 85.323919, mapObject: null },
    { name: 'Subhakamana 1', latitude: 27.676737, longitude: 85.316991, mapObject: null },
    { name: 'Nepal Yatayat 2', latitude: 27.681797, longitude: 85.319781, mapObject: null },

  ]);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.src = `https://www.bing.com/api/maps/mapcontrol?key=ApL9gk0lzPyXzgDct5B1kxrlkJIpkGBvFRaDYE2gVL3LNehOicd0_367zCh8WZZk&callback=initMap`;
    document.body.appendChild(script);

    window.initMap = () => {
      const map = new window.Microsoft.Maps.Map(document.getElementById('bingMap'), {
        credentials: 'ApL9gk0lzPyXzgDct5B1kxrlkJIpkGBvFRaDYE2gVL3LNehOicd0_367zCh8WZZk',
      });
      setMap(map);
    };
  }, []);

  useEffect(() => {
    if (map) {
      showUserLocation();
      const interval = setInterval(() => {
        updateMarkerPositions();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [map]);

  const updateMarkerPositions = () => {
    setMarkers((prevMarkers) =>
      prevMarkers.map((marker) => ({
        ...marker,
        latitude: marker.latitude + getRandomOffset(),
        longitude: marker.longitude + getRandomOffset(),
      }))
    );
  };

  const getRandomOffset = () => {
    return Math.random() * 0.0005 - 0.00025;
  };

  const renderMarkers = () => {
    if (map) {
      markers.forEach((marker) => {
        const { name, latitude, longitude, mapObject } = marker;
        let pin = mapObject;

        const loc = new window.Microsoft.Maps.Location(latitude, longitude);

        if (!pin) {
          pin = new window.Microsoft.Maps.Pushpin(loc, { title: name });
          marker.mapObject = pin; 
          map.entities.push(pin);
        } else {
          pin.setLocation(loc); 
        }
      });
    }
  };

  const showUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLatitude = position.coords.latitude;
        const userLongitude = position.coords.longitude;

        const userLocation = new window.Microsoft.Maps.Location(userLatitude, userLongitude);
        const userPin = new window.Microsoft.Maps.Pushpin(userLocation, {
          title: 'Your Location',
          icon: 'https://www.bingmapsportal.com/Content/images/poi_custom.png',
        });

        map.entities.push(userPin);
        map.setView({ center: userLocation, zoom: 18 });

        renderMarkers();
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    renderMarkers(); 
  }, [map, markers]); 

  return <div id="bingMap" className="w-full h-screen"></div>;
};

export default Track;
