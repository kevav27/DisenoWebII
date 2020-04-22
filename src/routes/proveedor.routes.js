const express = require("express");
const router = express.Router();

// Controller
const {
    crearNuevoProveedor,
    listarProveedor,
    obtenerProveedor,
    actualizarProveedor,
    eliminarProveedor
} = require("../controllers/proveedor.controller");

// Crear nuevo camión

router.post("/proveedor/nuevo-proveedor", crearNuevoProveedor);

// Listar todos los camiones
router.get("/proveedor", listarProveedor);


//Obtener un camión en específico
router.get("/proveedor/obtener-proveedor/:codigo_proveedor", obtenerProveedor);

// Edit Notes

router.put("/proveedor/editar-proveedor/:codigo_proveedor", actualizarProveedor);

// Delete Notes
router.delete("/proveedor/eliminar-proveedor/:codigo_proveedor", eliminarProveedor);

module.exports = router;