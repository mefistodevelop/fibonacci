const database = [
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

const createField = ({
  ip, request, response, date,
}) => ({
  ip,
  request,
  response,
  date,
  id: database.length + 1,
});

exports.addField = (payload) => {
  database.push(createField(payload));
};

exports.getData = () => database;
