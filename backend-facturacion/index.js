const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const empresasRoutes = require('./routes/empresas');
const facturasRoutes = require('./routes/facturas');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/empresas', empresasRoutes);
app.use('/api/facturas', facturasRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
