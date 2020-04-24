const bitacoraCtrl = {};

// Models
const Bitacora = require("../models/bitacora.model");


bitacoraCtrl.crearNuevaBitacora = async (req, res) => {
  const code = Math.floor((Math.random()*10000000));
  const nuevaBitacora = new Bitacora({
    usuario: req.params.usuario,
    codigoRegistro: "MOV-"+code,
    descripcion: req.body.descripcion,
  });
  await nuevaBitacora.save()
    .then(nuevaBitacora => {
      res.json(nuevaBitacora);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error al crear nuevo camión"
      });
    });
};


bitacoraCtrl.listarBitacora = async (req, res) => {
  await Bitacora.find()
    .then(bitacora => {
      res.json(bitacora);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error al recuperar los camiones de la base de datos"
      });
    });
};


bitacoraCtrl.obtenerBitacora = async (req, res) => {
 await Bitacora.find({codigoRegistro:req.params.codigoRegistro})
    .then(bitacora => {
      if (!bitacora) {
        return res.status(404).send({
          message: "El camion con el código: " + req.params.codigo_camion + " no existe"
        });
      }
      res.send(bitacora);
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

module.exports = bitacoraCtrl;