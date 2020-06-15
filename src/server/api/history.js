const { connection } = require('../database/connection');

exports.getHistory = (req, res) => {
  const { ip } = req;
  connection.query(`SELECT * FROM history WHERE ip = '${ip}'`, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};
