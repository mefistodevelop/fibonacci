const express = require('express');
const cors = require('cors');

const app = express();

const database = [
  {
    id: 1,
    ip: '122.123.1.1',
    request: 10,
    response: 300,
    date: '11.11.2019',
  },
  {
    id: 2,
    ip: '122.124.1.2',
    request: 1,
    response: 123,
    date: '01.01.2020',
  },
  {
    id: 3,
    ip: '122.129.5.1',
    request: 1123,
    response: 12300,
    date: '07.03.2020',
  },
];

app.get('/api/history', cors(), (req, res) => {
  res.json(database);
});

app.use(express.static('dist'));
app.get('/', (req, res) => res.send('Server is ready...'));
app.listen(8080, () => console.log('Server has started on http://localhost:8080/'));
