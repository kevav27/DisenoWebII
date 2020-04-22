const express = require("express");
const router = express.Router();

// Controller
const {
    crearNuevoTipoMateriaPrima,
    listarTipoMateriaPrima,
    obtenerTipoMateriaPrima,
    actualizarTipoMateriaPrima,
    eliminarTipoMateriaPrima
} = require("../controllers/tipoMateriaPrima.controller");

// Crear nuevo camión

router.post("/tipo-materia-prima/nuevo-tipo", crearNuevoTipoMateriaPrima);

// Listar todos los camiones
router.get("/tipo-materia-prima", listarTipoMateriaPrima);


//Obtener un camión en específico
router.get("/tipo-materia-prima/obtener-tipo/:codigo_tipoMateriaPrima", obtenerTipoMateriaPrima);

// Edit Notes

router.put("/tipo-materia-prima/editar-tipo/:codigo_tipoMateriaPrima", actualizarTipoMateriaPrima);

// Delete Notes
router.delete("/tipo-materia-prima/eliminar-tipo/:codigo_tipoMateriaPrima", eliminarTipoMateriaPrima);

module.exports = router;