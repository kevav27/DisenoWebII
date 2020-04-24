const usuarioCtrl = {};

// Models
const Usuario = require("../models/usuario.model");

usuarioCtrl.crearNuevoUsuario = async (req, res) => {
  const nuevoUsuario = new Usuario({
    email: req.body.email,
    user: req.body.user,
    nombre: req.body.nombre,
    rol: req.body.rol,
    password: req.body.password,
    estado: req.body.estado
  });
  await nuevoUsuario.save()
    .then(nuevoUsuario => {
      res.json(nuevoUsuario);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error al crear nuevo camión"
      });
    });
};

usuarioCtrl.listarUsuario = async (req, res) => {
  await Usuario.find()
    .then(usuario => {
      res.send(usuario);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error al recuperar bodegas de la base de datos"
      });
    });
};


usuarioCtrl.obtenerUsuario = async (req, res) => {
 await Usuario.find({user: req.params.user})
    .then(usuario => {
      if (!usuario) {
        return res.status(404).send({
          message: "El camion con el código: " + req.params.codigo_bodega + " no existe"
        });
      }
      res.send(usuario);
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "No se encontró ningún camión con el código: " + req.params.codigo_bodega
        });
      }
      return res.status(500).send({
        message: "Error al recuperar camión código: " + req.params.codigo_bodega
      });
    });
}

usuarioCtrl.actualizarUsuario = async (req, res) => {
  await Usuario.findOneAndUpdate({user: req.params.user}, { $set: req.body }, { new: true})
    .then(usuario => {
      if (!usuario) {
        return res.status(404).send({
          message: "No existe el camión con el código: " +req.params.codigo_bodega
        });
      }
      res.send(usuario)
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "No se encontró un camión con el código: " + req.params.codigo_bodega
        });
      }
      return res.status(500).send({
        message: "Error al intentar actualizar el camión con el código: " + req.params.codigo_bodega
      });
    });
};

usuarioCtrl.eliminarUsuario = async (req, res) => {
  await Usuario.deleteOne({user: req.params.user})
    .then(usuario => {
      if (!usuario) {
        return res.status(404).send({
          message: "No existe el camión con el código: " + req.params.codigo_bodega
        });
      }
      res.send({ "message": "Se eliminó el camión" })
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "No se encontró un camión con el código: " + req.params.codigo_bodega
        });
      }
      return res.status(500).send({
        message: `Error al intentar eliminar el camión con el código: ${req.params.codigo_bodega}`
      });
    });
};

module.exports = usuarioCtrl;