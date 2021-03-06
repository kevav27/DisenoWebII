const express = require("express");
const router = express.Router();

// Controller
const {
    renderForm,
    renderEdit,
    crearNuevaMateriaPrima,
    listarMateriaPrima,
    obtenerMateriaPrima,
    actualizarMateriaPrima,
    eliminarMateriaPrima
} = require("../controllers/materiaPrima.controller");

// Crear nuevo camión
router.get("/materia-prima/add", renderForm);
router.post("/materia-prima/nueva-materia", crearNuevaMateriaPrima);

// Listar todos los camiones
router.get("/materia-prima", listarMateriaPrima);


//Obtener un camión en específico
router.get("/materia-prima/obtener-materia/:codigo_materiaPrima", obtenerMateriaPrima);

// Edit Notes
router.get("/materia-prima/editar/:codigo_materiaPrima", renderEdit)
router.put("/materia-prima/editar-materia/:codigo_materiaPrima", actualizarMateriaPrima);

// Delete Notes
router.delete("/materia-prima/eliminar-materia/:codigo_materiaPrima", eliminarMateriaPrima);

module.exports = router;