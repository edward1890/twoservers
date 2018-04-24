var http = require("http");

var PORT1 = 7000

function handleRequest1(request, response) {

    response.end("im a server filled with doggo memes");
}
var server = http.createServer(handleRequest1);
server.listen(PORT1, function() {

console.log("Server listening on: http://localhost:" + PORT1);

});



var http = require("http");

var PORT2 = 7500

function handleRequest2(request, response) {

    response.end("i run on windows 95");
}
var server = http.createServer(handleRequest2);
server.listen(PORT2, function() {

console.log("Server listening on: http://localhost:" + PORT2);

});