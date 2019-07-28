const express = require('express');
const app = express();
const bookdbController = require('./bookdbController');

const port = process.env.port || 3000;
//template engine
const exphb = require('express-handlebars');
app.engine('handlebars', exphb({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//static files
app.use(express.static('public'));

bookdbController(app);

//listen to port
app.listen(port, () => {
    console.log('Your server has started at port ' + port);
});