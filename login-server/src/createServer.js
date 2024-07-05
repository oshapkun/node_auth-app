'use strict';

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const authRouter = require('./routes/auth.route.js');

const createServer = () => {
  const app = express();

  app.use(express.json());

  app.use(
    cors({
      origin: process.env.CLIENT_HOST,
      credentials: true,
    }),
  );

  app.use(authRouter);

  app.get('/', (req, res) => {
    res.send('Hello');
  });

  return app;
};

module.exports = {
  createServer,
};
