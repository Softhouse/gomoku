var express = require('express');
var http = require('http');
var path = require('path');

var server = express();
server.set('port', process.env.PORT || 3000);
server.use(express.static(path.join(__dirname, 'app')));

http.createServer(server).listen(server.get('port'), function(){
  console.log('Express server listening on port ' + server.get('port'));
});
