const express = require('express');
const router = express.Router();
const db = require('../database');


router.get('/buku', (req, res) => {
  db.all("SELECT * FROM buku", [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ message: "GET is Successful", data: rows });
  });
});


router.post('/buku', (req, res) => {
  const { title, author, publisher } = req.body;
  db.run("INSERT INTO buku (title, author, publisher) VALUES (?, ?, ?)", [title, author, publisher], function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ message: "POST is Successful", id: this.lastID, changes: this.changes });
  });
});


router.put('/buku/:id', (req, res) => {
  const { title, author, publisher } = req.body;
  const id = req.params.id;

  let sql = "UPDATE buku SET title = ?, author = ?";
  const params = [title, author];

  if (publisher) {
    sql += ", publisher = ?";
    params.push(publisher);
  }

  sql += " WHERE id = ?";
  params.push(id);

  db.run(sql, params, function (err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.json({ message: "PUT Successful", changes: this.changes });
  });
});


router.delete('/buku/:id', (req, res) => {
  const id = req.params.id;

  const sql = "DELETE FROM buku WHERE id = ?";
  db.run(sql, id, function (err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.json({ message: "DELETE is Successfull", changes: this.changes });
  });
});

module.exports = router;
