const consecutivoCtrl = {};

// Models
const Consecutivo = require("../models/consecutivo.model");


consecutivoCtrl.obtenerConsecutivo = async (req, res) => {
 await Consecutivo.find({prefijo:req.params.prefijo})
    .then(consecutivo => {
      if (!consecutivo) {
        return res.status(404).send({
          message: "El camion con el código: " + req.params.codigo_camion + " no existe"
        });
      }
      res.send(consecutivo);
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

consecutivoCtrl.actualizarConsecutivo = async (req, res) => {
  await Evento.findOneAndUpdate({parametro:req.params.parametro}, { $set: req.body }, { new: true})
    .then(consecutivo => {
      if (!consecutivo) {
        return res.status(404).send({
          message: "No existe el camión con el código: " + req.params.codigo_camion
        });
      }
      res.send(consecutivo)
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

module.exports = consecutivoCtrl;