import { Promise } from 'bluebird';
import 'dotenv/config';

const initOptions = {
    promiseLib: Promise
};

const pgp = require('pg-promise')(initOptions);

const connection = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

export const db = pgp(connection);