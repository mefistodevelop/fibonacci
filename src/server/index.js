const express = require('express');
const cors = require('cors');
const { getHistory } = require('./api/history');
const { getFibonacci } = require('./api/fibonacci');

const app = express();

app.get('/api/history', cors(), getHistory);

app.get('/api/fib', cors(), getFibonacci);

app.use(express.static('dist'));
app.get('/', (req, res) => res.send('Server is ready...'));
app.listen(8080, () => console.log('Server has started on http://localhost:8080/'));
