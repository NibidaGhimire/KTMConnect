// // // ApL9gk0lzPyXzgDct5B1kxrlkJIpkGBvFRaDYE2gVL3LNehOicd0_367zCh8WZZk

import React, { useState, useEffect } from "react";
import faker from "faker";
import axios from "axios";

const Track = () => {
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    const getUserLocation = () => {
      return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              resolve({ latitude, longitude });
            },
            (error) => {
              console.error("Error getting user location:", error.message);
              reject(error);
            }
          );
        } else {
          console.error("Geolocation is not supported by this browser.");
          reject(new Error("Geolocation is not supported by this browser."));
        }
      });
    };

    const generateRandomNearbyLocation = (center, offset = 0.01) => {
      const randomLatitude = center.latitude + (Math.random() - 0.5) * offset;
      const randomLongitude = center.longitude + (Math.random() - 0.5) * offset;
      return { latitude: randomLatitude, longitude: randomLongitude };
    };

    const updateMap = (busLocations) => {
      if (!map || !userLocation) return;

      const userPin = new Microsoft.Maps.Pushpin(userLocation, {
        title: "Your Location",
        color: "blue",
      });

      const busPins = busLocations.map((busLocation, index) => {
        return new Microsoft.Maps.Pushpin(busLocation, {
          title: `Bus ${index + 1} Location`,
          color: "red",
        });
      });

      if (map.entities.getLength() > 0) {
        map.entities.clear();
      }

      map.entities.push(userPin, ...busPins);

      const allLocations = [userLocation, ...busLocations];
      map.setView({
        bounds: Microsoft.Maps.LocationRect.fromLocations(allLocations),
      });
    };

    getUserLocation()
      .then((location) => {
        setUserLocation(location);
      })
      .catch((error) => {
        console.error("Error setting user location:", error);
      });

    const busLocations = [
      generateRandomNearbyLocation(userLocation),
      generateRandomNearbyLocation(userLocation),
    ];

    updateMap(busLocations);

    const interval = setInterval(() => {
      const newBusLocations = [
        generateRandomNearbyLocation(userLocation),
        generateRandomNearbyLocation(userLocation),
      ];
      updateMap(newBusLocations);
    }, 5000);

    return () => clearInterval(interval);
  }, [map, userLocation]);

  const mapRef = React.useRef();

  useEffect(() => {
    if (!map) {
      if (!window.Microsoft) {
        const bingMapScript = document.createElement("script");
        bingMapScript.src =
          "https://www.bing.com/api/maps/mapcontrol?jsonp=initMap&key=ApL9gk0lzPyXzgDct5B1kxrlkJIpkGBvFRaDYE2gVL3LNehOicd0_367zCh8WZZk";
        window.document.body.appendChild(bingMapScript);
      } else {
        const newMap = new Microsoft.Maps.Map(mapRef.current, {
          center: new Microsoft.Maps.Location(0, 0),
          zoom: 12,
        });
        setMap(newMap);
      }
    }
  }, [map]);

  return <div ref={mapRef} className="w-full h-screen" />;
};

export default Track;

// import React, { useState, useEffect } from "react";
// import faker from "faker";
// import axios from "axios";

// const Track = () => {
//   const [map, setMap] = useState(null);
//   const [userLocation, setUserLocation] = useState(null);

//   useEffect(() => {
<<<<<<< HEAD
//     const getUserLocation = () => {
//       return new Promise((resolve, reject) => {
//         if (navigator.geolocation) {
//           navigator.geolocation.getCurrentPosition(
//             (position) => {
//               const { latitude, longitude } = position.coords;
//               resolve({ latitude, longitude });
//             },
//             (error) => {
//               console.error("Error getting user location:", error.message);
//               reject(error);
//             }
//           );
//         } else {
//           console.error("Geolocation is not supported by this browser.");
//           reject(new Error("Geolocation is not supported by this browser."));
//         }
//       });
=======
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
>>>>>>> bd47efa04caf67953e49e424329296820548b7f1
//     };

//     const generateRandomLocation = () => {
//       const randomLatitude = parseFloat(faker.address.latitude());
//       const randomLongitude = parseFloat(faker.address.longitude());
//       return { latitude: randomLatitude, longitude: randomLongitude };
//     };

<<<<<<< HEAD
//     const updateMap = (busLocations) => {
//       if (!map || !userLocation) return;

//       const userPin = new Microsoft.Maps.Pushpin(userLocation, {
//         title: "Your Location",
//         color: "blue",
//       });

//       const busPins = busLocations.map((busLocation, index) => {
//         return new Microsoft.Maps.Pushpin(busLocation, {
//           title: `Bus ${index + 1} Location`,
//           color: "red",
//         });
//       });

//       if (map.entities.getLength() > 0) {
//         map.entities.clear();
//       }

//       map.entities.push(userPin, ...busPins);

//       const allLocations = [userLocation, ...busLocations];
//       map.setView({
//         bounds: Microsoft.Maps.LocationRect.fromLocations(allLocations),
//       });
//     };

//     getUserLocation()
//       .then((location) => {
//         setUserLocation(location);
//       })
//       .catch((error) => {
//         console.error("Error setting user location:", error);
//       });

//     const busLocations = [generateRandomLocation(), generateRandomLocation()];

//     updateMap(busLocations);

//     const interval = setInterval(() => {
//       const newBusLocations = [
//         generateRandomLocation(),
//         generateRandomLocation(),
//       ];
//       updateMap(newBusLocations);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [map, userLocation]);

//   const mapRef = React.useRef();

//   useEffect(() => {
//     if (!map) {
//       if (!window.Microsoft) {
//         const bingMapScript = document.createElement("script");
//         bingMapScript.src =
//           "https://www.bing.com/api/maps/mapcontrol?jsonp=initMap&key=ApL9gk0lzPyXzgDct5B1kxrlkJIpkGBvFRaDYE2gVL3LNehOicd0_367zCh8WZZk";
//         window.document.body.appendChild(bingMapScript);
//       } else {
//         const newMap = new Microsoft.Maps.Map(mapRef.current, {
//           center: new Microsoft.Maps.Location(0, 0),
//           zoom: 12,
//         });
//         setMap(newMap);
//       }
//     }
//   }, [map]);

//   return <div ref={mapRef} className="w-full h-screen" />;
// };

// export default Track;
=======
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
>>>>>>> bd47efa04caf67953e49e424329296820548b7f1

//test