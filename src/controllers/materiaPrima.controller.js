const materiaPrimaCtrl = {};

// Models
const MateriaPrima = require("../models/materiaPrima.model");

materiaPrimaCtrl.crearNuevaMateria = async (req, res) => {
  //const espacio = Producto.find({nombreBodega:req.body.nombre}).countDocuments();
  const code = Math.floor((Math.random()*10000000));
  const nuevaMateriaPrima = new MateriaPrima({
    codigo_bodega: "BOD-"+code,
    nombre: req.body.nombreCorto,
    nombreCorto: req.body.nombreCorto,
    alias: req.body.alias,
    ubicacion: req.body.ubicacion,
    unidadMedida: req.body.unidadMedida,
    nombreCorto: req.body.nombreCorto,
  });
  await nuevaMateriaPrima.save()
    .then(nuevaMateria => {
      res.json(nuevaMateria);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error al crear nuevo camión"
      });
    });
};

materiaPrimaCtrl.listarMateriaPrima = async (req, res) => {
  await MateriaPrima.find()
    .then(materia => {
      res.send(materia);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error al recuperar bodegas de la base de datos"
      });
    });
};


materiaPrimaCtrl.obtenerMateriaPrima = async (req, res) => {
 await MateriaPrima.find({codigo_materiaPrima: req.params.codigo_materiaPrima})
    .then(materia => {
      if (!materia) {
        return res.status(404).send({
          message: "El camion con el código: " + req.params.codigo_bodega + " no existe"
        });
      }
      res.send(materia);
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

materiaPrimaCtrl.actualizarMateriaPrima = async (req, res) => {
  await MateriaPrima.findOneAndUpdate({codigo_materiaPrima: req.params.codigo_materiaPrima}, { $set: req.body }, { new: true})
    .then(materia => {
      if (!materia) {
        return res.status(404).send({
          message: "No existe el camión con el código: " +req.params.codigo_bodega
        });
      }
      res.send(materia)
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

materiaPrimaCtrl.eliminarMateriaPrima = async (req, res) => {
  await MateriaPrima.deleteOne({codigo_materiaPrima: req.params.codigo_materiaPrima})
    .then(materia => {
      if (!materia) {
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

module.exports = materiaPrimaCtrl;