const express = require('express');
const app = express();

//set up template engine
const exphb = require('express-handlebars');
app.engine('handlebars', exphb({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//static files
app.use(express.static('public'));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// import db from "./config/database";

const port = process.env.port || 3000;

const routes = require("./routes/handlers");
app.use("/", routes);

// const books = require('./books');





// app.get('/', (req, res) => {
//     res.render('index', {title: 'Home Page'});
// });

// app.get('/about', (req, res) => {
//     res.render('about', {title: 'About App'});
// });

// app.get('/', (req, res) => {
//     res.render('', {title: ''});
// });

app.listen(port, () => {
    console.log('Your server has started at port ' + port);
});

// the above code performs the same thing as the code below however it uses express and express-handlebars to do so

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public/home.html');
// });

// app.get('/about', (req, res) => {
//     res.sendFile(__dirname + '/public/about.html');
// });

// app.get('/contact', (req, res) => {
//     res.sendFile(__dirname + '/public/contact.html');
// });

// app.get('/get', (req, res) => {
//     let found = books.get(req.query.title)
//     if(found){
//         res.send(JSON.stringify(found))
//     } else{
//         res.send("Book not available")
//     };
// });

// app.get('/getAll', (req, res) => {
//     let found = books.getAll()
//     if(found){
//         res.send(JSON.stringify(found, null, 2))
//     } else{
//         res.send("no books available")
//     };
// });

// app.get('/deleteItem', (req, res) => {
//     let result = books.deleteItem(req.query.title)
//     if(result.deleted){
//         res.send(req.query.title + " has been deleted")
//     } else{
//         res.send(req.query.title + " not found")
//     };
// });

// app.get('/add', (req, res) => {
    
// });