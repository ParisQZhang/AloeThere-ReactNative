require('dotenv').config()
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./router');
//const fs = require('fs');
// const key = fs.readFileSync('./key.pem');
// const cert = fs.readFileSync('./cert.pem');
// const https = require('https');
// const http = require('http');

const PORT = process.env.PORT || 3001;
const app = express();
// const server = https.createServer({ key: key, cert: cert }, app);
// const server = http.createServer(app);

app.use(cors());
app.use(morgan('tiny'));
app.use(express.static('public'))
app.use(express.json());
app.use(router);

app.get('/', (req, res) => { res.send('this is an secure server') });

if (!module.parent) {
  // server.listen(PORT, () => {
  //   console.log(`Server is listening on https://localhost:${PORT}`); //eslint-disable-line
  // })
  app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`); //eslint-disable-line
  })
}

module.exports = app;