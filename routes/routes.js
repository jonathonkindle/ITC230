const express = require('express');
const router = express.Router();
const Book = require('../models/books');

//get a list of books from the database
router.get('/books', (req, res, next) => {
    Book.find().then((book) => {
        res.render('index', {book: JSON.stringify(book)});  
    }).catch(next);
});

// router.get('/books', (req, res, next) => {
//     Book.find({title: req.query.title}).then((book) => {
//         res.send(book);
//     }).catch(next);
// });

//get one book from the db and render the details page
// router.get('/books:title', (req, res) => {
//     Book.findById(req.params.title).then((book) => {
//         res.json(book);
//     });
// });

//add a new book to the database
router.post('/books', (req, res, next) => {
    // console.log(req.body);
    // Book.update({'title':req.body.title}, req.body, {upsert:true}, (err, result) => {
    //     if (err) return next(err);
    //     console.log(result);
    // });
    Book.create(req.body).then((book) => {
        res.send(book);
    }).catch(next);
});

//update a book in the database
router.put('/books/:title', (req, res, next) => {
    Book.findOneAndUpdate({title: req.params.title}, req.body, {new: true}).then((book) => {
        res.send(book);
    }).catch(next);
});

//delete a book from the database
router.delete('/books/:title', (req, res, next) => {
    Book.findOneAndRemove({title: req.params.title}).then((book) => {
        res.send(book);
    }).catch(next);
});

module.exports = router;