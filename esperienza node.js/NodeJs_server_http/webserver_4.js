var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {
   var params = querystring.parse(url.parse(req.url).query);

   res.writeHead(200, {"Content-Type": "text/plain"});
   
   if ('a' in params && 'b' in params) {
      c=parseInt(params['a'])+parseInt(params['b']);	
      res.write(params['a'] + ' e ' + params['b'] + ' = ' + c);
   } 
   else {
      res.write('Manca qualcosa...');
   }
   
   res.end();
});

server.listen(8080);


// localhost:8080/?a=12&b=11

