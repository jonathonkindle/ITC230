const express = require('express');
const bodyParser = require('body-parser');


//setup express app
const app = express();

app.use(express.static('public'));

//setup up body parser
app.use(bodyParser.json());

//initialize routes
app.use('/api', require('./routes/routes'));

//error handling middleware
app.use((err, req, res, next) => {
    res.status(422).send({error: err.message});
})

//listen for requests
app.listen(process.env.port || 3000, () => {
    console.log('Now lisenting for requests');
});