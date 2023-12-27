// const express = require("express");
// const faker = require("faker/locale/en");

// const app = express();

// app.get("/fake-bus-location", (req, res) => {
//   const latitude = faker.address.latitude();
//   const longitude = faker.address.longitude();

//   res.json({ latitude, longitude });
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

//samriddhi //doesn't change anything
const express = require("express");
const faker = require("faker/locale/en");

const app = express();

app.get("/fake-bus-location", (req, res) => {
  const busLocation = {
    latitude: faker.address.latitude(),
    longitude: faker.address.longitude(),
  };

  res.json(busLocation);
});

const PORT = process.env.PORT || 3001; // Update the port to 3001 to match your React app
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
