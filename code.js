E.on('init', function() {
  var WIFI_NAME = 'SSID name';
  var WIFI_OPTIONS = { password: 'Enter password here' };

  var wifi = require('Wifi');
  wifi.connect(
    WIFI_NAME,
    WIFI_OPTIONS,
    function(err) {
      if (err) {
        console.log('Connection error: ' + err);
        return;
      }
      console.log('Connected!');
      runServer();
    }
  );
});


function runServer() {
  var http = require('http');
  http.createServer(function(req, res) {
      res.writeHead(200);
      var status = url.parse(req.url, true).query;
      var led  = status.led;
    console.log(status);
    console.log(led);
      if (led === 'on') digitalWrite(D16,1);
      if (led === 'off') digitalWrite(D16,0);

      res.end('LED status = ' + status);
    }).listen(8080);
}


save();