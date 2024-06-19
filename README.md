This is a simple Rest API for a Library Database that I made using Express.js in NodeJs, and usinng Sqlite3 for the database.
This was made for a final Exam.

## Usage:

# Install SQLite and Express

  - ```npm install sqlite3```

  - ```npm install express.```

# Head to the '/src' and run the server

  - ```cd /path/to/the/project/src```
  
  - ``` node index.js```


**Testing the API on Postman**

1. **GET all book**: 
   - Method: GET
   - URL: `http://localhost:4000/buku`

2. **POST a new user**: 
   - Method: POST
   - URL: `http://localhost:4000/buku`
   - Body: JSON
     ```json
     {
       "title": "Book 3",
       "author": "Author 3",
       "publisher": "Publisher 3"
     }
     ```

3. **PUT update a book**: 
   - Method: PUT
   - URL: `http://localhost:4000/buku/1`
   - Body: JSON
     ```json
     {
       "title": "Book 3",
       "author": "Author 4",
       "publisher": "Publisher 3"
     }
     ```

4. **DELETE a book**: 
   - Method: DELETE
   - URL: `http://localhost:4000/buku/1`

By following these steps, you can create a database first and then build an API that interacts with it, ensuring a well-structured and efficient API.
