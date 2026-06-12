const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// CONFIGURACIÓN EXPRESS
app.use(express.json());
app.use(cors());

// CONEXIÓN A MONGODB ATLAS
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Conexión exitosa a MongoDB Atlas"))
    .catch(err => console.error("Error de conexión a MongoDB Atlas:", err));

// ESQUEMA DE PRODUCTOS (PASO 21)
const ProductoSchema = new mongoose.Schema({
    nombre: String,
    precio: Number,
    existencia: Number
});

// MODELO DE PRODUCTOS (PASO 22)
const Producto = mongoose.model('Producto', ProductoSchema);

// RUTA GET (PASO 23)
app.get('/productos', async (req, res) => {
    const productos = await Producto.find();
    res.json(productos);
});

// RUTA POST (PASO 24)
app.post('/productos', async (req, res) => {
    const nuevoProducto = new Producto(req.body);

    await nuevoProducto.save();

    res.json({
        mensaje: "Producto registrado",
        nuevoProducto
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor activo en puerto ${PORT}`);
});