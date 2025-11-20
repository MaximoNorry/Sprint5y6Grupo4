require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

const corsOptions = {
  origin: "https://sprint5y6.vercel.app",
};
app.use(cors(corsOptions));

app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));
app.use('/api/productos', productRoutes);

app.get('/', (req, res) => res.send('API Sprint5y6 - Backend funcionando'));

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  console.error('Error: MONGO_URI no definido en .env');
  process.exit(1);
}

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado a MongoDB Atlas');
    app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));
  })
  .catch(err => {
    console.error('Error conectando a MongoDB:', err);
  });
