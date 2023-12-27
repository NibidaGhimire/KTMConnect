// const express = require('express');
// const faker = require('faker/locale/en');
<<<<<<< HEAD

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
=======
// const cors = require('cors'); 
// const app = express();
>>>>>>> af3c625b0b2f342de16338ce300a83143f93219f

// app.use(cors());

// app.get('/fake-bus-location', (req, res) => {
//     const latitude = parseFloat(faker.address.latitude());
//     const longitude = parseFloat(faker.address.longitude());
    
//     res.json({ latitude, longitude });
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });



const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3001;

<<<<<<< HEAD
app.get("/fake-bus-location", (req, res) => {
  const fakeBusLocation = {
    latitude: faker.address.latitude(),
    longitude: faker.address.longitude(),
  };
  res.json(fakeBusLocation);
=======
app.use(cors());

app.post('/send-location', (req, res) => {
    const { latitude, longitude } = req.body;
    console.log('Received location:', { latitude, longitude });
    // Process the received location data as needed
    res.status(200).send('Location received successfully');
>>>>>>> af3c625b0b2f342de16338ce300a83143f93219f
});

app.listen(port, () => {
  console.log(`Fake GPS server is running on http://localhost:${port}`);
});
