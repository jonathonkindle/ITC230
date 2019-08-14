const express = require('express');
const router = express.Router();
const Book = require('../models/books');

//get a list of books from the database
router.get('/books', (req, res, next) => {
    Book.find().then((books) => {
        res.render('index', {books: books});  
    });
});
// api route for getting all books from database
router.get('/api/books', (req, res, next) => {
    Book.find().then((books) => {
        res.json(books);  
    });
});


// get one book from the db and render the details page
router.get('/details/:title', (req,res, next) => {
    Book.findOne({title: req.params.title}).then((book) => {
        res.render('details', {book: book, title: req.params.title});
    }).catch(next);
});
// api route for getting a single book from database
router.get('/api/details/:title', (req,res, next) => {
    Book.findOne({title: req.params.title}).then((book) => {
        res.json(book);
    }).catch(next);
});


// add a book to the database and re-render the index page list
router.post('/books', (req, res, next) => {
    console.log(req.body);
    Book.updateOne({title :req.body.title}, req.body, {upsert:true}).then(() => {
        Book.find().then((books) => {
            res.render('index', {books: books});  
        });
    }).catch(next);
});
// api route for adding books
router.post('/api/add', (req, res, next) => {
    console.log(req.body);
    Book.updateOne({title :req.body.title}, req.body, {upsert:true}).then((result) => {
        res.json(result);  
    }).catch(next);
});


// delete a book from the database and send the delete page
router.get('/delete/:title', (req, res, next) => {
    Book.findOneAndRemove({title: req.params.title}).then((book) => {
        res.render('delete', {book: book});
    }).catch(next);
});
// api route for deleting a book from the database
router.get('/api/delete/:title', (req, res, next) => {
    Book.findOneAndRemove({title: req.params.title}).then((book) => {
        res.json(book);
    }).catch(next);
});


module.exports = router;


//add a new book to the database
// router.post('/books', (req, res, next) => {
            // console.log(req.body);
            // Book.update({'title':req.body.title}, req.body, {upsert:true}, (err, result) => {
            //     if (err) return next(err);
            //     console.log(result);
            // });
    // Book.create(req.body).then((book) => {
    //     res.send(book);
    // }).catch(next);
// });