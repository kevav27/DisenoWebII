const express = require("express");
const router = express.Router();

// Controller
const {
   // renderCamionForm,
    crearNuevoCamion,
    listarCamiones,
    obtenerCamion,
    //renderEditarForm,
    actualizarCamion,
    eliminarCamion
} = require("../controllers/camion.controller");

// Crear nuevo camión
/*router.get("/camion/agregar", renderCamionForm);*/

router.post("/camion/nuevo-camion", crearNuevoCamion);

// Listar todos los camiones
router.get("/camion", listarCamiones);


//Obtener un camión en específico
router.get("/camion/obtener-camion/:codigo_camion", obtenerCamion);

// Edit Notes
/*router.get("/camion/editar/:codigo_camion", renderEditarForm);*/

router.put("/camion/editar-camion/:codigo_camion", actualizarCamion);

// Delete Notes
router.delete("/camion/eliminar-camion/:codigo_camion", eliminarCamion);

module.exports = router;