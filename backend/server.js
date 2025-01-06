const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5009;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.send('deeeevBackend is working for Visit Penangpp!');
});

app.get('/api/places', (req, res) => {
    const places = [
        { name: 'Penang Hill', description: 'A scenic hilltop with breathtaking views.' },
        { name: 'George Town', description: 'A UNESCO World Heritage Site with vibrant street art.' },
        { name: 'Kek Lok Si Temple', description: 'One of the largest Buddhist temples in Southeast Asia.' },
        { name: 'Penang National Park', description: 'A natural haven for wildlife and eco-adventures.' }
    ];
    res.json(places);
});

app.get('/api/home', (req, res) => {
    const homeData = {
        title: 'Welcome to Visit Penang',
        description: 'Discover the charm of Penang, a cultural and natural paradise with endless attractions.',
        imageUrl: 'https://example.com/penang-image.jpg'
    };
    res.json(homeData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
