var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/home.html');
});

app.get('/about', function(req, res){
    res.sendFile(__dirname + '/public/about.html');
});

app.get('/contact', function(req, res){
    res.sendFile(__dirname + '/public/contact.html');
});

app.listen(3000);


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