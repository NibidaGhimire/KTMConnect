// // ApL9gk0lzPyXzgDct5B1kxrlkJIpkGBvFRaDYE2gVL3LNehOicd0_367zCh8WZZk


// import React, { useEffect } from 'react';

// const MapComponent = () => {
//   useEffect(() => {
//     const loadMap = () => {
//       const script = document.createElement('script');
//       script.type = 'text/javascript';
//       script.async = true;
//       script.defer = true;
//       script.src = `https://www.bing.com/api/maps/mapcontrol?key=ApL9gk0lzPyXzgDct5B1kxrlkJIpkGBvFRaDYE2gVL3LNehOicd0_367zCh8WZZk&callback=initMap`;
//       document.body.appendChild(script);
//     };


//     window.initMap = () => {
//       const map = new window.Microsoft.Maps.Map(document.getElementById('bingMap'), {
//         credentials: "ApL9gk0lzPyXzgDct5B1kxrlkJIpkGBvFRaDYE2gVL3LNehOicd0_367zCh8WZZk",
//       });

//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//       } else {
//         alert('Geolocation is not supported by this browser.');
//       }

//       function showPosition(position) {
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;

//         const location = new window.Microsoft.Maps.Location(latitude, longitude);
//         map.setView({ center: location, zoom: 20 });

//         const pin = new window.Microsoft.Maps.Pushpin(location,{
//           title: "bus",
//         });
//         map.entities.push(pin);
//       }
//     };

//     loadMap();
//   }, []);

//   return(
//      <div id="bingMap" className='w-full h-screen'></div>
//   )
// };

// export default MapComponent;



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
        credentials: 'ApL9gk0lzPyXzgDct5B1kxrlkJIpkGBvFRaDYE2gVL3LNehOicd0_367zCh8WZZk',
      });

      const locations = [
        { name: 'Sajha 1', latitude: 27.6796000, longitude: 85.3204300 },
        { name: 'Nepal Yatayat 1', latitude: 27.686382, longitude: 85.315399 },
      ];

      locations.forEach((location) => {
        const { name, latitude, longitude } = location;

        const loc = new window.Microsoft.Maps.Location(latitude, longitude);
        const pin = new window.Microsoft.Maps.Pushpin(loc, {
          title: name,
        });

        map.entities.push(pin);
      });

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        alert('Geolocation is not supported by this browser.');
      }

      function showPosition(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const userLocation = new window.Microsoft.Maps.Location(latitude, longitude);
        map.setView({ center: userLocation, zoom: 20 });

        const userPin = new window.Microsoft.Maps.Pushpin(userLocation, {
          title: 'Your Location',
        });
        map.entities.push(userPin);
      }
    };

    loadMap();
  }, []);

  return (
    <div id="bingMap" className="w-full h-screen"></div>
  );
};

export default MapComponent;
