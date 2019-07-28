const express = require('express');
const bodyParser = require('body-parser');


//setup express app
const app = express();


//setup up body parser
app.use(bodyParser.json());

//initialize routes
app.use(require('./routes/routes'));

//listen for requests
app.listen(process.env.port || 3000, () => {
    console.log('Now lisenting for requests');
});