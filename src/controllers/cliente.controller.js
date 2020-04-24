const clienteCtrl = {};

// Models
const Cliente = require("../models/cliente.model");

clienteCtrl.crearNuevoCliente = async (req, res) => {
  //const espacio = Producto.find({nombreBodega:req.body.nombre}).countDocuments();
  const code = Math.floor((Math.random()*10000000));
  const nuevoCliente = new Cliente({
    codigo_cliente: "CL-"+code,
    nombreCorto: req.body.nombreCorto,
    fechaIngreso: req.body.fechaIngreso,
    documentoIdentidad: req.body.documentoIdentidad,
    nombre: req.body.nombre,
    telefonos: req.body.telefonos,
    correo: req.body.correo,
    direccion: req.body.direccion,
  });
  await nuevoCliente.save()
    .then(nuevoCliente => {
      res.json(nuevoCliente);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error al crear nuevo camión"
      });
    });
};

clienteCtrl.listarCliente = async (req, res) => {
  await Cliente.find()
    .then(cliente => {
      res.send(cliente);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error al recuperar bodegas de la base de datos"
      });
    });
};


clienteCtrl.obtenerCliente = async (req, res) => {
 await Cliente.find({codigo_cliente: req.params.codigo_cliente})
    .then(cliente => {
      if (!cliente) {
        return res.status(404).send({
          message: "El camion con el código: " + req.params.codigo_bodega + " no existe"
        });
      }
      res.send(cliente);
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

clienteCtrl.actualizarCliente = async (req, res) => {
  await Cliente.findOneAndUpdate({codigo_cliente: req.params.codigo_cliente}, { $set: req.body }, { new: true})
    .then(cliente => {
      if (!cliente) {
        return res.status(404).send({
          message: "No existe el camión con el código: " +req.params.codigo_bodega
        });
      }
      res.send(cliente)
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

clienteCtrl.eliminarCliente = async (req, res) => {
  await Cliente.deleteOne({codigo_cliente: req.params.codigo_cliente})
    .then(cliente => {
      if (!cliente) {
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

module.exports = clienteCtrl;