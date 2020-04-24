const rolCtrl = {};

// Models
const Rol = require("../models/rol.model");


rolCtrl.crearNuevoRol = async (req, res) => {
  const code = Math.floor((Math.random()*10000000));
  const nuevoRol = new Rol({
    codigo_rol: "ROL"+code,
    nombreRol: req.body.nombreRol,
    rolesAsignados: req.body.rolesAsignados,
    rolesDisponibles: req.body.rolesDisponibles,
    nombreCorto: req.body.nombreRol
  });
  await nuevoRol.save()
    .then(nuevoRol => {
      res.json(nuevoRol);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error al crear nuevo camión"
      });
    });
};

rolCtrl.listarRol = async (req, res) => {
  await Rol.find()
    .then(rol => {
      res.json(rol);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error al recuperar los camiones de la base de datos"
      });
    });
};


rolCtrl.obtenerRol = async (req, res) => {
 await Rol.find({codigo_camion:req.params.codigo_camion})
    .then(rol => {
      if (!rol) {
        return res.status(404).send({
          message: "El camion con el código: " + req.params.codigo_camion + " no existe"
        });
      }
      res.send(rol);
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "No se encontró ningún camión con el código: " + req.params.codigo_camion
        });
      }
      return res.status(500).send({
        message: "Error al recuperar camión código: " + req.params.codigo_camion
      });
    });
}

rolCtrl.actualizarRol = async (req, res) => {
  await Rol.findOneAndUpdate({codigo_rol: req.params.codigo_rol }, { $set: req.body }, { new: true})
    .then(rol => {
      if (!rol) {
        return res.status(404).send({
          message: "No existe el camión con el código: " + req.params.codigo_camion
        });
      }
      res.send(rol)
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "No se encontró un camión con el código: " + req.params.codigo_camion
        });
      }
      return res.status(500).send({
        message: "Error al intentar actualizar el camión con el código: " + req.params.codigo_camion
      });
    });
};

rolCtrl.eliminarRol = async (req, res) => {
  await Rol.deleteOne({codigo_rol:req.params.codigo_rol})
    .then(rol => {
      if (!rol) {
        return res.status(404).send({
          message: "No existe el camión con el código: " + req.params.codigo_camion
        });
      }
      res.send({ "message": "Se eliminó el camión" })
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "No se encontró un camión con el código: " + req.params.codigo_camion
        });
      }
      return res.status(500).send({
        message: `Error al intentar eliminar el camión con el código: ${req.params.codigo_camion}`
      });
    });
};

module.exports = rolCtrl;