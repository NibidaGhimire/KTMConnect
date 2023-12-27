// const express = require('express');
// const faker = require('faker/locale/en');

// const app = express();

// app.get('/fake-bus-location', (req, res) => {
//     const latitude = faker.address.latitude();
//     const longitude = faker.address.longitude();

//     res.json({ latitude, longitude });
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
const express = require("express");
const faker = require("faker");

const app = express();
const port = 3001;

app.get("/fake-bus-location", (req, res) => {
  const fakeBusLocation = {
    latitude: faker.address.latitude(),
    longitude: faker.address.longitude(),
  };
  res.json(fakeBusLocation);
});

app.listen(port, () => {
  console.log(`Fake GPS server is running on http://localhost:${port}`);
});
