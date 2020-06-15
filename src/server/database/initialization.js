const { connection } = require('./connection');

const createTable = `
CREATE TABLE IF NOT EXISTS history (
  id SERIAL,
  ip VARCHAR(45) NOT NULL,
  date VARCHAR(30),
  request VARCHAR(255),
  response VARCHAR(255),
  PRIMARY KEY (id)
);
`;

exports.initializeDatabase = () => {
  connection.query('CREATE DATABASE IF NOT EXISTS fib_db', (err) => {
    if (err) throw err;
  });

  connection.query('USE fib_db', (err) => {
    if (err) throw err;
  });

  connection.query(createTable, (err) => {
    if (err) throw err;
  });
};
