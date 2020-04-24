const parametrosCtrl = {};

// Models
const Parametro = require("../models/parametros.model");

parametrosCtrl.crearNuevoParametro = async (req, res) => {
  const nuevoParametro = new Parametro({
    nombreCompania: req.body.nombreCompania,
    telefono: req.body.telefono,
    cedulaJuridica: req.body.cedulaJuridica,
    mensajeSaludo: req.body.mensajeSaludo,
    direccionEstablecimiento: req.body.direccionEstablecimiento,
  });
  await nuevoParametro.save()
    .then(nuevoParametro => {
      res.json(nuevoParametro);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error al crear nuevo camión"
      });
    });
};

parametrosCtrl.obtenerParametro = async (req, res) => {
 await Parametro.find({cedulaJuridica: req.params.cedulaJuridica})
    .then(parametro => {
      if (!parametro) {
        return res.status(404).send({
          message: "El camion con el código: " + req.params.codigo_bodega + " no existe"
        });
      }
      res.send(parametro);
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

parametrosCtrl.eliminarParametro = async (req, res) => {
  await Parametro.deleteOne({cedulaJuridica: req.params.cedulaJuridica})
    .then(parametro => {
      if (!parametro) {
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

module.exports = parametrosCtrl;