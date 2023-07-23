const express = require('express');
const path = require('path');
const fs = require('fs');

// Server
const PORT = 3001;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
// Static assets from public folder
app.use(express.static('public'));

// Get route for the home page
app.get('/', (req, res) => 
res.sendFile(path.join(__dirname, '/public/assets/index.html'))
);


// Get route for the notes page
app.get('/feedback', (req, res) =>
res.sendFile(path.join(__dirname, '/public/assets/notes.html'))
);

app.listen(PORT, () =>
console.log('App listening at http://localhost:${PORT}')
);

app.get('/api/reviews', (req, res) =>
if (req.params.note_id) {
    console.info('${req.method} request received to get a single note');
    
})