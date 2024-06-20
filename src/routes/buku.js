const express = require('express');
const router = express.Router();
const booksController = require('../controller/buku');


router.get('/', booksController.getAllBooks);
router.post('/', booksController.addNewBooks);
router.put('/:id', booksController.editBooks);
router.delete('/:id', booksController.deleteBooks);

module.exports = router;
