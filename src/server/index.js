const express = require('express');
const cors = require('cors');

const app = express();

let database = [
  {
    id: 1,
    ip: '122.123.1.1',
    request: 10,
    response: 89,
    date: '11.11.2019',
  },
  {
    id: 2,
    ip: '122.124.1.2',
    request: 1,
    response: 1,
    date: '01.01.2020',
  },
  {
    id: 3,
    ip: '122.129.5.1',
    request: 1123,
    response: 3.569625363791541e+234,
    date: '07.03.2020',
  },
];

const createRequest = (ip, request, response, date) => ({
  ip,
  request,
  response,
  date,
  id: database.length + 1,
});

const addNewRequest = (newRequest) => {
  database = [...database, newRequest];
};

const calcFibonacci = (number) => {
  let num = number;
  let a = 1;
  let b = 0;
  let temp = 0;

  while (num >= 0) {
    temp = a;
    a += b;
    b = temp;
    num -= 1;
  }
  return b;
};

console.log(calcFibonacci(2000));


const getDate = () => {
  const dateTime = new Date();
  const date = dateTime.toLocaleDateString();
  const time = dateTime.toLocaleTimeString();
  return `${date} ${time}`;
};

app.get('/api/history', cors(), (req, res) => {
  res.json(database);
});

app.get('/api/fib', cors(), (req, res) => {
  const { number } = req.query;
  const { ip } = req;
  const fib = calcFibonacci(number);
  const date = getDate();
  const newRequest = createRequest(ip, number, fib, date);
  addNewRequest(newRequest);

  // eslint-disable-next-line
  if (isFinite(fib)) {
    res.json({ number: fib });
  } else {
    res.json({ number: fib.toString() });
  }
});

app.use(express.static('dist'));
app.get('/', (req, res) => res.send('Server is ready...'));
app.listen(8080, () => console.log('Server has started on http://localhost:8080/'));
