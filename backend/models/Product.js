const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, default: '' },
  precio: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  imagenUrl: { type: String, default: '' }
}, { timestamps: true });
module.exports = mongoose.model('Product', productSchema);
