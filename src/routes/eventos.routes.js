const express = require("express");
const router = express.Router();

// Controller
const {
    crearNuevoEvento,
    listarEvento,
    obtenerEvento,
    actualizarEvento,
    eliminarEvento
} = require("../controllers/evento.controller");

// Crear nuevo camión

router.post("/evento/nuevo-evento", crearNuevoEvento);

// Listar todos los camiones
router.get("/evento", listarEvento);


//Obtener un camión en específico
router.get("/evento/obtener-evento/:codigo_evento", obtenerEvento);

// Edit Notes

router.put("/evento/editar-evento/:codigo_evento", actualizarEvento);

// Delete Notes
router.delete("/evento/eliminar-evento/:codigo_evento", eliminarEvento);

module.exports = router;