const express = require("express");
const router = express.Router();

// Controller
const {
    crearNuevaBodega,
    listarBodegas,
    obtenerBodega,
    actualizarBodega,
    eliminarBodega
} = require("../controllers/bodega.controller");

// Crear nuevo bodega

router.post("/bodega/nueva-bodega", crearNuevaBodega);

// Listar bodegas
router.get("/bodegas", listarBodegas);


//Obtener bodega
router.get("/bodega/obtener-bodega/:codigo_bodega", obtenerBodega);

// Editar bodega
router.put("/bodega/editar-bodega/:codigo_bodega", actualizarBodega);

// Borrar bodega
router.delete("/bodega/eliminar-bodega/:codigo_bodega", eliminarBodega);

module.exports = router;