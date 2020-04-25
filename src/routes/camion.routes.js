const express = require("express");
const router = express.Router();

// Controller
const {
    renderCamionForm,
    renderActualizarCamionForm,
    crearNuevoCamion,
    listarCamiones,
    obtenerCamion,
    actualizarCamion,
    eliminarCamion
} = require("../controllers/camion.controller");

// Crear nuevo camión

router.get("/camion/nuevo-camion", renderCamionForm);
router.post("/camion/nuevo-camion", crearNuevoCamion);

// Listar todos los camiones
router.get("/camion/lista", listarCamiones);


//Obtener un camión en específico
router.get("/camion/obtener-camion/:codigo_camion", obtenerCamion);

// Edit Notes
/*router.get("/camion/editar/:codigo_camion", renderActualizarCamionForm);*/
router.put("/camion/editar-camion/:codigo_camion", actualizarCamion);

// Delete Notes
router.delete("/camion/eliminar-camion/:codigo_camion", eliminarCamion);

module.exports = router;