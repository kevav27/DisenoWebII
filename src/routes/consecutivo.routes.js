const express = require("express");
const router = express.Router();

// Controller
const {
    editarConsecutivo,
    obtenerConsecutivo,
} = require("../controllers/consecutivo.controller");

// Listar todos los camiones
router.put("/consecutivo", editarConsecutivo);


//Obtener un camión en específico
router.get("/bitacora/obtener-bitacora/:codigo_evento", obtenerConsecutivo);