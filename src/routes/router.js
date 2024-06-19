const express = require('express');
const router = express.Router();
const db = require('../database');


router.get('/buku', (req, res) => {
  db.all("SELECT * FROM buku", [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ data: rows });
  });
});


router.post('/buku', (req, res) => {
  const { judul, pengarang, penerbit } = req.body;
  db.run("INSERT INTO buku (judul, pengarang, penerbit) VALUES (?, ?, ?)", [judul, pengarang, penerbit], function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ message: "berhasil menambahkan", id: this.lastID, changes: this.changes });
  });
});


router.put('/buku/:id', (req, res) => {
  const { judul, pengarang, penerbit } = req.body;
  const id = req.params.id;

  let sql = "UPDATE buku SET judul = ?, pengarang = ?";
  const params = [judul, pengarang];

  if (penerbit) {
    sql += ", penerbit = ?";
    params.push(penerbit);
  }

  sql += " WHERE id = ?";
  params.push(id);

  db.run(sql, params, function (err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.json({ message: "berhasil mengubah", changes: this.changes });
  });
});


router.delete('/buku/:id', (req, res) => {
  const id = req.params.id;

  const sql = "DELETE FROM buku WHERE id = ?";
  db.run(sql, id, function (err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.json({ message: "User deleted successfully", changes: this.changes });
  });
});

module.exports = router;
