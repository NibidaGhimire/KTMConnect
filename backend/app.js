// const express = require('express');
// const faker = require('faker/locale/en');
// const cors = require('cors'); 
// const app = express();

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

app.use(cors());

app.post('/send-location', (req, res) => {
    const { latitude, longitude } = req.body;
    console.log('Received location:', { latitude, longitude });
    // Process the received location data as needed
    res.status(200).send('Location received successfully');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
