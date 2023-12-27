// ApL9gk0lzPyXzgDct5B1kxrlkJIpkGBvFRaDYE2gVL3LNehOicd0_367zCh8WZZk


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Track = () => {
//   const [map, setMap] = useState(null);
//   const [currentLocation, setCurrentLocation] = useState(null);

//   useEffect(() => {
//     const bingMapScript = document.createElement('script');
//     bingMapScript.src = 'https://www.bing.com/api/maps/mapcontrol?key=ApL9gk0lzPyXzgDct5B1kxrlkJIpkGBvFRaDYE2gVL3LNehOicd0_367zCh8WZZk&callback=initMap';
//     window.document.body.appendChild(bingMapScript);
//     window.initMap = () => {
//       const newMap = new Microsoft.Maps.Map(document.getElementById('map'), {
//         center: new Microsoft.Maps.Location(0, 0),
//         zoom: 32,
//       });
//       setMap(newMap);
//     };
//   }, []);

//   useEffect(() => {
//     const fetchFakeBusLocation = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/fake-bus-location');
//         if (response && response.data) {
//           const { latitude, longitude } = response.data;
//           const newLocation = new Microsoft.Maps.Location(parseFloat(latitude), parseFloat(longitude));

//           if (!currentLocation || Microsoft.Maps.SpatialMath.getDistanceTo(currentLocation, newLocation) < 1000) {
//             updateMap(newLocation);
//             setCurrentLocation(newLocation);
//           }
//         } else {
//           console.error('Invalid response from server:', response);
//         }
//       } catch (error) {
//         console.error('Error fetching fake bus location:', error.message);
//       }
//     };

//     const updateMap = (location) => {
//       if (!map) return;

//       const pin = new Microsoft.Maps.Pushpin(location, {
//         title: 'Bus Location',
//       });

//       if (map.entities.getLength() > 0) {
//         map.entities.clear();
//       }

//       map.entities.push(pin);
//       map.setView({ center: location, zoom: 12 });
//     };

//     const interval = setInterval(fetchFakeBusLocation, 5000);

//     return () => clearInterval(interval);
//   }, [map, currentLocation]);

//   return (
//     <div id='map' className='w-full h-screen' />
//   );
// };

// export default Track;






import React, { useEffect } from 'react';

const MapComponent = () => {
  useEffect(() => {
    const loadMap = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.defer = true;
      script.src = `https://www.bing.com/api/maps/mapcontrol?key=ApL9gk0lzPyXzgDct5B1kxrlkJIpkGBvFRaDYE2gVL3LNehOicd0_367zCh8WZZk&callback=initMap`;
      document.body.appendChild(script);
    };


    window.initMap = () => {
      const map = new window.Microsoft.Maps.Map(document.getElementById('bingMap'), {
        credentials: "ApL9gk0lzPyXzgDct5B1kxrlkJIpkGBvFRaDYE2gVL3LNehOicd0_367zCh8WZZk",
      });

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        alert('Geolocation is not supported by this browser.');
      }

      function showPosition(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const location = new window.Microsoft.Maps.Location(latitude, longitude);
        map.setView({ center: location, zoom: 20 });

        const pin = new window.Microsoft.Maps.Pushpin(location,{
          title: "bus",
        });
        map.entities.push(pin);
      }
    };

    loadMap();
  }, []);

  return(
     <div id="bingMap" className='w-full h-screen'></div>
  )
};

export default MapComponent;
