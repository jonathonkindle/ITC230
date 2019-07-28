const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Jonathon:coconutlove4284@cluster0-ocjif.mongodb.net/itc230?retryWrites=true&w=majority');

var bookInfo = new mongoose.Schema({
    title: String,
    author: String,
    price: Number,
});

var Book = mongoose.model('Books', bookInfo);

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = (app) => {
    app.get('/', (req, res) => {
        Book.find({}, (err, data) => {
            if (err) throw err;
            res.render('/', {books: data});
        });
    });

    app.post('/', urlencodedParser, (req, res) => {
        var newBook = Book(req.body).save((err, data) => {
            if (err) throw err;
            res.json(data);
        })
    })

    app.delete('/:title', (req, res) => {
        Book.find({title: req.params.title.replace(/\-/g, " ")}).remove((err, data) => {
            if (err) throw err;
            res.json(data);
        });
    });

}