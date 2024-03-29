const express = require('express');
const app = express();
const helmet = require('helmet');
















































module.exports = app;
const api = require('./server.js');
app.use(helmet.noSniff());
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use(helmet.noSniff());
app.use(helmet.frameguard({action: 'deny'}));
app.use(helmet.ieNoOpen());
var ninetyDaysInSeconds = 90*24*60*60;
app.use(helmet.hsts({ maxAge: ninetyDaysInSeconds, force: true }));
app.use('/_api', api);
app.use(helmet.xssFilter());
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
app.use(helmet.hidePoweredBy());


