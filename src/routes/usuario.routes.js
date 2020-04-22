const express = require("express");
const router = express.Router();

// Controller
const {
    crearNuevoUsuario,
    listarUsuario,
    obtenerUsuario,
    actualizarUsuario,
    eliminarUsuario
} = require("../controllers/usuario.controller");

// Crear nuevo usuario

router.post("/usuario/nuevo-usuario", crearNuevoUsuario);

// Listar usuarios
router.get("/usuario", listarUsuario);


//Obtener un usuario
router.get("/usuario/obtener-usuario/:username", obtenerUsuario);

// Editar usuario

router.put("/usuario/editar-usuario/:username", actualizarUsuario);

// Borrar usuario
router.delete("/usuario/eliminar-usuario/:username", eliminarUsuario);


//LOGIN Y CAMBIAR CONTRASEÑA FALTAN
module.exports = router;