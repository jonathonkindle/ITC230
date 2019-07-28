const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Book = new Schema ({
    title: {type: String},
    author: {typre: String},
    price: {type: Number},
});

module.exports = mongoose.model('Content', Book);