const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api/Cadastrar', (req, res) => {
  res.json({ message: 'Dados do servidor' });
});

const port = process.env.PORT || 44338;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
