const { addField } = require('../database/database');
const fibonacci = require('../fibonacci');
const { getDate } = require('../libs/date');

exports.getFibonacci = (req, res) => {
  const { number } = req.query;
  const { ip } = req;
  const fib = fibonacci.calc(number).toString();
  const date = getDate();
  addField({
    ip, date, request: number, response: fib,
  });

  res.json({ number: fib });
};
