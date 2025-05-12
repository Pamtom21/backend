const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data/empresas.json');

exports.getEmpresas = (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataPath));
  res.json(data);
};
