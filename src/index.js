// index.js

const express = require('express');
const app = express();
const db = require('./database');
const router = require('./routes/buku');
const port = 4000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
