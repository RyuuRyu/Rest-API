const express = require('express');
const app = express();
const db = require('./database/database.js');
const router = require('./routes/buku.js');
const port = 4000;

app.use(express.json());
app.use('/buku', router);

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
