const express = require("express");
const router = express.Router();

// Controller
const {
    renderForm,
    renderEdit,
    crearNuevoCliente,
    listarCliente,
    obtenerCliente,
    actualizarCliente,
    eliminarCliente
} = require("../controllers/cliente.controller");

// Crear nuevo camión
router.get("/cliente/add", renderForm)
router.post("/cliente/nuevo-cliente", crearNuevoCliente);

// Listar todos los camiones
router.get("/cliente", listarCliente);


//Obtener un camión en específico
router.get("/cliente/obtener-cliente/:codigo_cliente", obtenerCliente);

// Edit Notes
router.get("/cliente/editar/:codigo_cliente", renderEdit);
router.put("/cliente/editar-cliente/:codigo_cliente", actualizarCliente);

// Delete Notes
router.delete("/cliente/eliminar-cliente/:codigo_cliente", eliminarCliente);

module.exports = router;