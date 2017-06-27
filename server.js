var express = require('express');
var app = express();
var fs = require('fs');
var https = require('https');
var qr = require('qr-image');
var PORT = process.env.PORT || 8080;
app.get('/ctdqr/v1/offer/:id', function (req, res) {
       console.log( "sending databack" );
       var theurl = 'https://offer-gse00010885.apaas.em3.oraclecloud.com/ptmgt/v1/offers/' + req.params.id;

      var code = qr.image(theurl, {type:'png'});
      res.type('png');
      code.pipe(res);

})

  var server = app.listen(PORT, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
