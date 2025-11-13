const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/", async (req, res) => {
  try {
    const productos = await Product.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener productos" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const producto = await Product.findById(req.params.id);
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: "ID no encontrado" });
  }
});

router.post("/", async (req, res) => {
  try {
    const nuevo = new Product(req.body);
    const guardado = await nuevo.save();
    res.status(201).json(guardado);
  } catch (error) {
    res.status(500).json({ error: "Error al crear producto" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const actualizado = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(actualizado);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Producto eliminado" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar" });
  }
});

module.exports = router;
