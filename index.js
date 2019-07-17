const express = require('express');
const app = express();
const exphb = require('express-handlebars');
// const books = require('./books');

app.engine('handlebars', exphb({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public/home.html');
// });

app.get('/', (req, res) => {
    res.render('index');
});

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

app.listen(3000, () => {
    console.log("Your server has started at port ", 3000);
});


// the above code performs the same thing as the code below however it uses express to do so

// var http = require("http");
// var fs = require("fs");

// var server = http.createServer(function(req, res) {
//     console.log('A request has been made at: ' + req.url);
//     if(req.url === '/' || req.url ==='/home'){
//         res.writeHead(200, {"Content-Type": "text/html"});
//         fs.createReadStream(__dirname + '/public/home.html').pipe(res);
//     } else if(req.url === '/about'){
//         res.writeHead(200, {"Content-Type": "text/html"});
//         fs.createReadStream(__dirname + '/public/about.html').pipe(res);
//     } else if(req.url === '/api'){
//         var api = [{name: 'jonathon', class: 'itc230'}];
//         res.writeHead(200, {"Content-Type": "application.json"});
//         res.end(JSON.stringify(api));
//     } else{
//         res.writeHead(404, {"Content-Type": "text/html"});
//         fs.createReadStream(__dirname + '/public/404.html').pipe(res);
//     }
// });

// server.listen(3000);

// console.log("Server is operating on port 3000");