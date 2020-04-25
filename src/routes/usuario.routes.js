const express = require("express");
const router = express.Router();

// Controller
const {

    renderSignupForm,
    renderLoginForm,
    login,
    logout,
    registro,
    renderPassword,
    password,

} = require("../controllers/usuario.controller");

// Crear nuevo usuario

//LOGIN Y CAMBIAR CONTRASEÑA FALTAN

router.get('/users/registro', renderSignupForm);

router.post('/users/registro', registro);

router.get('/users/login', renderLoginForm);

router.post('/users/login', login);

router.get('/users/logout', logout);

router.get('/users/password', renderPassword);

router.post('/users/password', password);



module.exports = router;