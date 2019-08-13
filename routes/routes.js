const express = require('express');
const router = express.Router();
const Book = require('../models/books');

//get a list of books from the database
router.get('/books', (req, res, next) => {
    Book.find().then((books) => {
        res.render('index', {books: books});  
    });
});

// get one book from the db and render the details page
router.get('/details/:title', (req,res, next) => {
    Book.findOne({title: req.params.title}).then((book) => {
        res.render('details', {book: book, title: req.params.title});
    }).catch(next);
});

// add a book to the database and re-render the index page list
router.post('/books', (req, res, next) => {
    Book.updateOne({title :req.body.title}, req.body, {upsert:true}).then(() => {
        Book.find().then((books) => {
            res.render('index', {books: books});  
        });
    }).catch(next);
});

// delete a book from the database and send the delete page
router.get('/delete/:title', (req, res, next) => {
    Book.findOneAndRemove({title: req.params.title}).then((book) => {
        res.render('delete', {book: book});
    }).catch(next);
});

router.put('/details/:title', (req, res, next) => {
    Book.findOneAndUpdate({title: req.params.title}, req.body).then(() => {
        Book.findOne({title: req.params.title}).then((book) => {
            console.log(book);
            res.render('details', {book: book}).catch(next);
        });
    });
});

module.exports = router;

//this is for the react component
// router.get('/books:title/details', (req, res) => {
//     Book.findById(req.params.title).then((book) => {
//         res.json(book);
//     });
// });

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

//update a book in the database
// router.put('/books/:title', (req, res, next) => {
//     Book.findOneAndUpdate({title: req.params.title}, req.body, {new: true}).then((book) => {
//         res.send(book);
//     }).catch(next);
// });

//delete a book from the database
// router.get('/delete/:title', (req,res) => {
//     let title = req.params.title;
//     let result = Book.findOneAndDelete(title); // delete book object
//     res.render('delete', {title: title, result: result});
// });