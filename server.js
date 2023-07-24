const express = require("express");

const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');


// Server
const PORT = 3001;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Static assets from public folder
app.use(express.static("public"));

app.use('/api',apiRoutes);
app.use('/',htmlRoutes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

// app.get('/api/reviews', (req, res) =>
// if (req.params.note_id) {
//     console.info('${req.method} request received to get a single note');

// })
