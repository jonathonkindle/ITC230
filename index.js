var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res) {
    console.log('A request has been made at: ' + req.url);
    if(req.url === '/' || req.url ==='/home'){
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream(__dirname + '/public/home.html').pipe(res);
    } else if(req.url === '/about'){
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream(__dirname + '/public/about.html').pipe(res);
    } else if(req.url === '/api'){
        var api = [{name: 'jonathon', class: 'itc230'}];
        res.writeHead(200, {"Content-Type": "application.json"});
        res.end(JSON.stringify(api));
    } else{
        res.writeHead(404, {"Content-Type": "text/html"});
        fs.createReadStream(__dirname + '/public/404.html').pipe(res);
    }
});

server.listen(3000);

console.log("Server is operating on port 3000");