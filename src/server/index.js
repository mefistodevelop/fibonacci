const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const { getHistory } = require('./api/history');
// const { getFibonacci } = require('./api/fibonacci');
// const calcFibonacci = require('./fibonacci');

const app = express();
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'm35j17n0D!',
});


const createTable = `
CREATE TABLE IF NOT EXISTS history (
  id SERIAL,
  ip VARCHAR(45) NOT NULL,
  date DATE,
  request VARCHAR(255),
  response VARCHAR(255),
  PRIMARY KEY (id)
);
`;

connection.connect((err) => {
  if (err) throw err;
  console.log('Database: Connection is open');
});

connection.query('CREATE DATABASE IF NOT EXISTS fib_db', (err) => {
  if (err) throw err;
  console.log('database is initialized');
});

connection.query('USE fib_db', (err) => {
  if (err) throw err;
});

connection.query(createTable, (err) => {
  if (err) throw err;
  console.log('table is initialized');
});


connection.end((err) => {
  if (err) throw err;
  console.log('Database: Connection is closed');
});


app.get('/api/history', cors(), getHistory);

// app.get('/api/fib', cors(), (req, res) => {
//   const { number } = req.query;
//   const { ip } = req;
//   calcFibonacci();
// });

app.use(express.static('dist'));
app.get('/', (req, res) => res.send('Server is ready...'));
app.listen(8080, () => console.log('Server has started on http://localhost:8080/'));
