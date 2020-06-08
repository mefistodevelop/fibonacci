const database = require('../tempDataBase');

exports.getHistory = (req, res) => {
  res.json(database.getData());
};
