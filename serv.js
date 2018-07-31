var http = require("http");
var PORT1 = 7000;
var PORT2 = 7500;

function somethingGood (request, response) {
    response.end("Good news! You're awesome!");
}

var server1 = http.createServer(somethingGood);

server1.listen(PORT1, function(){
    console.log("Good news! You're awesome!");
});

function somethingBad(request, response) {
    response.end("Bad news! You're so naughty!");
}

var server2 = http.createServer(somethingGood);

server2.listen(PORT2, function(){
    console.log("Bad news! You're so dirty mind!");
});