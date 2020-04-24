const tipoMateriaPrimaCtrl = {};

// Models
const TipoMateria = require("../models/tipoMateriaPrima.model");


tipoMateriaPrimaCtrl.crearNuevoTipoMateriaPrima = async (req, res) => {
  const code = Math.floor((Math.random()*10000000));
  const nuevoTipoMateria = new TipoMateria({
    codigo_tipoMateriaPrima: "TMP-"+code,
    descripcion: req.body.descripcion,
    nombreCorto: req.body.nombreCorto
  });
  await nuevoTipoMateria.save()
    .then(nuevoTipo => {
      res.json(nuevoTipo);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error al crear nuevo camión"
      });
    });
};

tipoMateriaPrimaCtrl.listarTipoMateriaPrima = async (req, res) => {
  await TipoMateria.find()
    .then(tipoMateria => {
      res.json(tipoMateria);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error al recuperar los camiones de la base de datos"
      });
    });
};


tipoMateriaPrimaCtrl.obtenerTipoMateriaPrima = async (req, res) => {
 await TipoMateria.find({codigo_tipoMateriaPrima:req.params.codigo_tipoMateriaPrima})
    .then(tipoMateria => {
      if (!tipoMateria) {
        return res.status(404).send({
          message: "El camion con el código: " + req.params.codigo_camion + " no existe"
        });
      }
      res.send(tipoMateria);
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

tipoMateriaPrimaCtrl.actualizarTipoMateriaPrima = async (req, res) => {
  await TipoMateria.findOneAndUpdate({codigo_tipoMateriaPrima: req.params.codigo_tipoMateriaPrima }, { $set: req.body }, { new: true})
    .then(tipoMateria => {
      if (!tipoMateria) {
        return res.status(404).send({
          message: "No existe el camión con el código: " + req.params.codigo_camion
        });
      }
      res.send(tipoMateria)
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

tipoMateriaPrimaCtrl.eliminarTipoMateriaPrima = async (req, res) => {
  await TipoMateria.deleteOne({codigo_tipoMateriaPrima:req.params.codigo_tipoMateriaPrima})
    .then(tipoMateria => {
      if (!tipoMateria) {
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

module.exports = tipoMateriaPrimaCtrl;