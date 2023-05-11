const express = require('express');
const cors = require('cors');
const app = express();
const host = 'http://localhost';
const port = 3000

const corsOptions = {
    origin: 'https://localhost:5173'
}
app.use(cors());

// We'll use the public directory to serve the Vue App
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`App listening on ${host}:${port}`);
});
