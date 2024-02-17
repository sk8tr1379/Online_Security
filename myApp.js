const express = require('express');
const app = express();
const helmet = require('helmet');
















































module.exports = app;
const api = require('./server.js');
app.use(helmet.noSniff());
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use(helmet.frameguard({action: 'deny'}));
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
app.use(helmet.noSniff());


