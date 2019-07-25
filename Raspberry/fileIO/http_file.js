var fs = require('fs');

require('http').createServer( function(req, res) {

  fs.readFile('www/index1.html',
    function(err, file) {
      if (err) {
        res.writeHead(500, {"Content-Type": "text/html;charset=utf-8"});
        res.end('Error Not Found, ㄏ');
        return ;

      }

      res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
      res.end(file);

    });
}).listen(8080, function(){

  console.log('Port 8080');

});