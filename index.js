const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require("express-handlebars");

//setup express app
const app = express();

app.engine(".html", handlebars({extname: '.html'}));
app.set("view engine", ".html");

app.use(express.static('public'));

//setup up body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//initialize routes
// app.use('/api', require('./routes/routes'));
app.use('/', require('./routes/routes', 'cors'));

//error handling middleware
app.use((err, req, res, next) => {
    console.log(err);
    res.status(422).send({error: err.message});
})


//listen for requests
app.listen(process.env.port || 3000, () => {
    console.log('Now lisenting for requests');
});