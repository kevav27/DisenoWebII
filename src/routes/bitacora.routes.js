const express = require("express");
const router = express.Router();

// Controller
const {
    crearNuevaBitacora,
    listarBitacora,
    obtenerBitacora,
} = require("../controllers/bitacora.controller");

// Crear nuevo camión

router.post("/bitacora/nueva-bitacora", crearNuevaBitacora);

// Listar todos los camiones
router.get("/bitacora", listarBitacora);


//Obtener un camión en específico
router.get("/bitacora/obtener-bitacora/:codigo_evento", obtenerBitacora);

module.exports = router;