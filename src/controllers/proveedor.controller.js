const proveedor = {};

// Models
const Proveedor = require("../models/proveedor.model");


proveedor.crearNuevoTipoMateriaPrima = async (req, res) => {
  const code = Math.floor((Math.random()*10000000));
  const nuevoProveedor = new Proveedor({
    codigo_proveedor: "PROV-"+code,
    cedula: req.body.cedula,
    tipoCedula: req.body.tipoCedula,
    nombre: req.body.nombre,
    nombreCorto: req.body.nombreCorto,
    telefonos: req.body.telefonos,
    correo: req.body.correo,
    telefonoContactos: req.body.telefonoContactos,
    direccion: req.body.direccion
  });
  await nuevoProveedor.save()
    .then(nuevoProveedor => {
      res.json(nuevoProveedor);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error al crear nuevo camión"
      });
    });
};

proveedor.listarProveedor = async (req, res) => {
  await Proveedor.find()
    .then(proveedor => {
      res.json(proveedor);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error al recuperar los camiones de la base de datos"
      });
    });
};


proveedor.obtenerProveedor = async (req, res) => {
 await Proveedor.find({codigo_proveedor:req.params.codigo_proveedor})
    .then(proveedor => {
      if (!proveedor) {
        return res.status(404).send({
          message: "El camion con el código: " + req.params.codigo_camion + " no existe"
        });
      }
      res.send(proveedor);
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

proveedor.actualizarProveedor = async (req, res) => {
  await Proveedor.findOneAndUpdate({codigo_proveedor:req.params.codigo_proveedor}, { $set: req.body }, { new: true})
    .then(proveedor => {
      if (!proveedor) {
        return res.status(404).send({
          message: "No existe el camión con el código: " + req.params.codigo_camion
        });
      }
      res.send(proveedor)
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

proveedor.eliminarTipoMateriaPrima = async (req, res) => {
  await Proveedor.deleteOne({codigo_proveedor:req.params.codigo_proveedor})
    .then(proveedor => {
      if (!proveedor) {
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

module.exports = proveedor;