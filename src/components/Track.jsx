// ApL9gk0lzPyXzgDct5B1kxrlkJIpkGBvFRaDYE2gVL3LNehOicd0_367zCh8WZZk

import React, { useState, useEffect } from "react";
import axios from "axios";

const Track = () => {
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Function to get the user's location (you may need to implement this)
    const getUserLocation = () => {
      // Implement the logic to get the user's location here
      // For simplicity, I'll set a sample location (replace with actual code)
      return { latitude: 0.0, longitude: 0.0 };
    };

    // Function to fetch the fake bus location
    const fetchFakeBusLocation = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/fake-bus-location"
        );
        if (response && response.data) {
          const { latitude, longitude } = response.data;
          updateMap(parseFloat(latitude), parseFloat(longitude));
        } else {
          console.error("Invalid response from server:", response);
        }
      } catch (error) {
        console.error(
          "Error fetching fake bus location:",
          error.response ? error.response.data : error.message
        );
      }
    };

    const updateMap = (latitude, longitude) => {
      if (!map) return;

      const newLocation = new Microsoft.Maps.Location(latitude, longitude);

      const userPin = new Microsoft.Maps.Pushpin(newLocation, {
        title: "Your Location",
        color: "blue", // Customize the color if needed
      });

      const busPin = new Microsoft.Maps.Pushpin(newLocation, {
        title: "Bus Location",
        color: "red", // Customize the color if needed
      });

      if (map.entities.getLength() > 0) {
        map.entities.clear();
      }

      map.entities.push(userPin, busPin);

      // Set the view to include both user and bus locations
      map.setView({
        bounds: Microsoft.Maps.LocationRect.fromLocations([
          newLocation,
          userLocation,
        ]),
      });
    };

    // Get the user's location and set it in the state
    setUserLocation(getUserLocation());

    // Fetch fake bus location at regular intervals
    const interval = setInterval(fetchFakeBusLocation, 5000);

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

// import React, { useEffect } from "react";

// const MapComponent = () => {
//   useEffect(() => {
//     const loadMap = () => {
//       const script = document.createElement("script");
//       script.type = "text/javascript";
//       script.async = true;
//       script.defer = true;
//       script.src = `https://www.bing.com/api/maps/mapcontrol?key=ApL9gk0lzPyXzgDct5B1kxrlkJIpkGBvFRaDYE2gVL3LNehOicd0_367zCh8WZZk&callback=initMap`;
//       document.body.appendChild(script);
//     };

//     window.initMap = () => {
//       const map = new window.Microsoft.Maps.Map(
//         document.getElementById("bingMap"),
//         {
//           credentials:
//             "ApL9gk0lzPyXzgDct5B1kxrlkJIpkGBvFRaDYE2gVL3LNehOicd0_367zCh8WZZk",
//         }
//       );

//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//       } else {
//         alert("Geolocation is not supported by this browser.");
//       }

//       function showPosition(position) {
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;

//         const location = new window.Microsoft.Maps.Location(
//           latitude,
//           longitude
//         );
//         map.setView({ center: location, zoom: 20 });

//         const pin = new window.Microsoft.Maps.Pushpin(location, {
//           title: "bus",
//         });
//         map.entities.push(pin);
//       }
//     };

//     loadMap();
//   }, []);

//   return <div id="bingMap" className="w-full h-screen"></div>;
// };

// export default MapComponent;
