var cultivos = require('./cultivos-controler');
var plantacoes = require('./plantacoes-controller');
var configuracoes = require('./configuracoes-controller');
var express = require('express');
var cors = require('cors');
var app = express();

var whitelist = ['http://127.0.0.1:3000', 'http://localhost:3000', 'http://192.168.1.105:3000'];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      console.log('Origin: ',origin, 'Whitelist', whitelist)
      callback(new Error('Not allowed by CORS'))
    }
  }
}
// Then pass them to cors:
app.use(cors(corsOptions));

app.use('/cultivos', cultivos);
app.use('/plantacoes', plantacoes);
app.use('/configuracoes', configuracoes);

app.listen(3005, function () {
  console.log('App listening on port 3005!');
});

