const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create book Schema and model
const BookSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title field is required']
    },
    author: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    }
});

const Book = mongoose.model('book', BookSchema);

module.exports = Book;