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
//     };

//     const generateRandomLocation = () => {
//       const randomLatitude = parseFloat(faker.address.latitude());
//       const randomLongitude = parseFloat(faker.address.longitude());
//       return { latitude: randomLatitude, longitude: randomLongitude };
//     };

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
