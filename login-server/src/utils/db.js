'use strict';

require('dotenv').config();

const { Sequelize } = require('sequelize');

const {
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
} = process.env;

const client = new Sequelize({
  database: POSTGRES_DB,
  username: POSTGRES_USER,
  host: POSTGRES_HOST,
  port: POSTGRES_PORT,
  password: POSTGRES_PASSWORD,
  dialect: 'postgres',
});

module.exports = {
  client,
};
