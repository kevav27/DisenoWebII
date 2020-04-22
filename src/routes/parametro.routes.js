const express = require("express");
const router = express.Router();

// Controller
const {
    crearNuevoParametro,
    obtenerParametro,
    eliminarParametro
} = require("../controllers/parametros.controller");

// Crear nuevo parametro

router.post("/parametros/nuevo-parametro", crearNuevoParametro);

//Mostrar parámetro
router.get("/parametros/obtener-parametro", obtenerParametro);

// Borrar parámetro
router.delete("/parametros/eliminar-parametros/:nombre", eliminarParametro);

module.exports = router;