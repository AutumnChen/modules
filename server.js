var http = require('http');
var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('<div>hello node</div>');
});

server.listen(3000, '127.0.0.1');

console.log('running.....')
