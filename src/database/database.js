const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/database.db');


db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS buku (id INTEGER PRIMARY KEY, title TEXT, author TEXT, publisher TEXT)", (err) => {
    if (err) {
      console.error('Error creating table:', err.message);
    } else {
      
      db.get("SELECT COUNT(*) AS count FROM buku", (err, row) => {
        if (err) {
          console.error('Error checking table:', err.message);
        } else if (row.count === 0) {
          
          const stmt = db.prepare("INSERT INTO buku (title, author, publisher) VALUES (?, ?, ?)");
          stmt.run('Book 1', 'Author 1', 'Publisher 1');
          stmt.run('Book 2', 'Author 2', 'Publisher 2');
          stmt.finalize();
        }
      });
    }
  });

  db.run("CREATE TABLE IF NOT EXISTS borrow (id INTEGER PRIMARY KEY, borrowers TEXT, title TEXT, date TEXT)", (err) => {
    if (err) {
      console.error('Error creating table:', err.message);
    } else {

      db.get("SELECT COUNT(*) AS count FROM borrow", (err, row) => {
        if (err) {
          console.error('Error chekcing table:', err.message);
        } else if (row.count === 0) {

          const stmt = db.prepare("INSERT INTO borrow (borrowers, title,date) VALUES (?, ?, ?)");
          stmt.run('Borrowers 1', 'Title 1', 'Date 1');
          stmt.run('Borrowers 2', 'Title 2', 'Date 2');
          stmt.finalize();
        }
      })
    }
  });
});

module.exports = db;
