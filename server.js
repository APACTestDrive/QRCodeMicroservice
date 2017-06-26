var express = require('express');
var app = express();
var fs = require('fs');
var https = require('https');
var qr = require('qr-image');

app.get('/ctdqr/v1/offer/:id', function (req, res) {
       console.log( "sending databack" );
       var theurl = 'https://orcl.asia/ptmgt/v1/offers/' + req.params.id;

      var code = qr.image(theurl, {type:'png'});
      res.type('png');
      code.pipe(res);

})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
