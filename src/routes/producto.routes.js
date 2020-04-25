const express = require("express");
const router = express.Router();

// Controller
const {
    renderForm,
    renderEdit,
    crearNuevoProducto,
    listarProducto,
    obtenerProducto,
    actualizarProducto,
    eliminarProducto
} = require("../controllers/producto.controller");

// Crear nuevo camión
router.get("/producto/add", renderForm);
router.post("/producto/nuevo-producto", crearNuevoProducto);

// Listar todos los camiones
router.get("/producto", listarProducto);


//Obtener un camión en específico
router.get("/producto/obtener-producto/:codigo_producto", obtenerProducto);

// Edit Notes
router.get("/producto/editar/:codigo_producto", renderEdit)
router.put("/producto/editar-producto/:codigo_producto", actualizarProducto);

// Delete Notes
router.delete("/producto/eliminar-producto/:codigo_producto", eliminarProducto);

module.exports = router;