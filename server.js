const express = require('express');
const app = express();
const proxy = require('express-http-proxy');
const { PORT } = require('./config');

app.use('/proxy-api.gbif', proxy('http://api.gbif.org'));

app.listen(PORT, () => console.log(`App is now running on port ${PORT}`));
