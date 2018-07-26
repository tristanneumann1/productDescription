const express = require('express');

const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const path = require('path');

const router = require('./router');

// const seed = require('./seed.js');

const server = express();
let port = 3001;

server.use(morgan());
server.use(helmet());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(express.static(path.join(__dirname, './../client/dist')));
server.use('/api', router);

server.listen(port, ()=>{ console.log('server online'); });