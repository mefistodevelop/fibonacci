const { connection } = require('./connection');

exports.addField = ({
  ip, date, request, response,
}) => {
  connection.query(`
  INSERT INTO history (ip, date, request, response)
  VALUES ('${ip}', '${date}', '${request}', '${response}')
  `, (err) => {
    if (err) throw err;
  });
};
