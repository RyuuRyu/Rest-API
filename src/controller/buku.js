const db = require('../database/database');

const getAllBooks = (req, res) => {
    db.all("SELECT * FROM buku", [], (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({ message: "GET is successful", data: rows });
    });
};

const addNewBooks = (req, res) => {
    const { title, author, publisher } = req.body;
    db.run("INSERT INTO buku (title, author, publisher) VALUES (?, ?, ?)", [title, author, publisher], function (err) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({ message: "POST is successful", id: this.lastID, changes: this.changes });
    });
};

const editBooks = (req, res) => {
  const { title, author, publisher } = req.body;
  const id = req.params.id;


  let sql = "UPDATE buku SET title = ?, author = ?, publisher = ? WHERE id = ?";
  const params = [title, author, publisher, id ];

  db.run(sql, params, function(err) {
      if (err) {
          return res.status(400).json({ error: err.message });
      }
      res.json({ message: "PUT Successful", changes: this.changes });
  });
};

const deleteBooks = (req, res) => {
  const id = req.params.id;

  const sql = "DELETE FROM buku WHERE id = ?";
  db.run(sql, id, function (err) {
      if (err) {
          return res.status(400).json({ error: err.message });
      }
      res.json({ message: "DELETE is successful", changes: this.changes });
  });
};

const getAllBorrowers = (req, res) => {
  db.all("SELECT * FROM borrow", [], (err, rows) => {
      if (err) {
          res.status(400).json({ error: err.message });
          return;
      }
      res.json({ message: "GET is successful", data: rows });
  });
};

module.exports = {
    getAllBooks,
    addNewBooks,
    editBooks,
    deleteBooks,
};
