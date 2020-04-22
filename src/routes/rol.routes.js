const express = require("express");
const router = express.Router();

// Controller
const {
    crearNuevoRol,
    listarRol,
    obtenerRol,
    actualizarRol,
    eliminarRol
} = require("../controllers/rol.controller");

// Crear nuevo camión

router.post("/rol/nuevo-rol", crearNuevoRol);

// Listar todos los camiones
router.get("/rol", listarRol);


//Obtener un camión en específico
router.get("/rol/obtener-rol/:codigo_rol", obtenerRol);

// Edit Notes

router.put("/rol/editar-rol/:codigo_rol", actualizarRol);

// Delete Notes
router.delete("/rol/eliminar-rol/:codigo_rol", eliminarRol);

module.exports = router;