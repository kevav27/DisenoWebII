const bodegaCtrl = {};

// Models
const Bodega = require("../models/bodega.model");

bodegaCtrl.crearNuevaBodega = async (req, res) => {
  //const espacio = Producto.find({nombreBodega:req.body.nombre}).countDocuments();
  const code = Math.floor((Math.random()*10000000));
  const nuevaBodega = new Bodega({
    codigo_bodega: "BOD-"+code,
    nombre: req.body.nombreCorto,
    nombreCorto: req.body.nombreCorto,
    alias: req.body.alias,
    ubicacion: req.body.ubicacion,
    unidadMedida: req.body.unidadMedida,
    tipoBodega: req.body.tipoBodega,
    espacioBodega: 0,
  });
  await nuevaBodega.save()
    .then(nuevaBodega => {
      res.json(nuevaBodega);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error al crear nuevo camión"
      });
    });
};

bodegaCtrl.listarBodegas = async (req, res) => {
  await Bodega.find()
    .then(bodegas => {
      res.send(bodegas);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error al recuperar bodegas de la base de datos"
      });
    });
};


bodegaCtrl.obtenerBodega = async (req, res) => {
 await Bodega.find({codigo_bodega: req.params.codigo_bodega})
    .then(bodega => {
      if (!bodega) {
        return res.status(404).send({
          message: "El camion con el código: " + req.params.codigo_bodega + " no existe"
        });
      }
      res.send(bodega);
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

bodegaCtrl.actualizarBodega = async (req, res) => {
  await Bodega.findOneAndUpdate({codigo_bodega: req.params.codigo_bodega}, { $set: req.body }, { new: true})
    .then(bodega => {
      if (!bodega) {
        return res.status(404).send({
          message: "No existe el camión con el código: " +req.params.codigo_bodega
        });
      }
      res.send(bodega)
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

bodegaCtrl.eliminarBodega = async (req, res) => {
  await Bodega.deleteOne({codigo_bodega: req.params.codigo_bodega})
    .then(bodega => {
      if (!bodega) {
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

module.exports = bodegaCtrl;