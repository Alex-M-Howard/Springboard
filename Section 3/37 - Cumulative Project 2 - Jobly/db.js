"use strict";
/** Database setup for jobly. */
const { Client } = require("pg");
const { getDatabaseUri, USER, PASSWORD, HOST, DBPORT } = require("./config");

let db;

let dbUri = getDatabaseUri();

if (process.env.NODE_ENV === "production") {
  db = new Client({
    connectionString: `postgres://${USER}:${PASSWORD}@${HOST}:${DBPORT}/${dbUri}`,
    ssl: {rejectUnauthorized: false}
  });
} else {
  db = new Client({
    connectionString: `postgres://${USER}:${PASSWORD}@${HOST}:${DBPORT}/${dbUri}`
  });
}

db.connect();

module.exports = db;