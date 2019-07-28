const express = require('express');
const router = express.Router();
const Book = require('../models/books');

//get a list of books from the database
router.get('/books', (req, res) => {
    res.send({type: 'GET'});
});

//add a new book to the database
router.post('/books', (req, res) => {
    // console.log(req.body);
    // Book.update({'title':req.body.title}, req.body, {upsert:true}, (err, result) => {
    //     if (err) return next(err);
    //     console.log(result);
    // });
    Book.create(req.body).catch({upsert:true}).then((book) => {
        res.send(book);
    });
});

//update a book in the database
router.put('/books/:title', (req, res) => {
    res.send({type: 'PUT'});
});

//delete a book from the database
router.delete('/books/:title', (req, res) => {
    res.send({type: 'DELETE'});
});

module.exports = router;