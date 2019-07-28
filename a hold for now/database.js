import mongoose from "mongoose";
const connectionString = require('./connection')

mongoose.connect(connectionString, {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("Connected to MongoDB database")
});