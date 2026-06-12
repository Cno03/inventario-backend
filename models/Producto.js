const mongoose = require('mongoose');

// Esquema de productos
const ProductoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    existencia: { type: Number, required: true }
});