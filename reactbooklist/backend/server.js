const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const uri = process.env.connectionString;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

mongoose.Promise = global.Promise;


const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.use(cors());
app.use(express.json());


const routes = require('./routes/routes');
app.use('/books', routes);

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});