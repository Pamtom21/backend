const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data/facturas.json');

exports.getFacturas = (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataPath));
  res.json(data);
};
