const camionCtrl = {};

// Models
const Camion = require("../models/camion.model");


camionCtrl.renderCamionForm = (req, res) => {
  res.render('camion');
}

camionCtrl.crearNuevoCamion = async (req, res) => {
    const code = Math.floor((Math.random()*10000000));
    req.body.codigo_camion = "CAM-"+code;
  //const code = Math.floor((Math.random()*10000000));
  const nuevoCamion = new Camion({
    codigo_camion: req.body.codigo_camion,
    nombreCorto: req.body.nombreCorto,
    descripcion: req.body.descripcion,
    codigo_camion: req.body.codigo_camion,
    marca: req.body.marca,
    year: req.body.year,
    placa: req.body.placa
  });
  await nuevoCamion.save()
    .then(nuevoCamion => {
      this.renderCamionForm;
      //res.json(nuevoCamion);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error al crear nuevo camión"
      });
    });
};

camionCtrl.listarCamiones = async (req, res) => {
  const camiones = await Camion.find()
  res.render('pruebas', { camiones })
    /*.then(camiones => {
      
      res.json(camiones);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error al recuperar los camiones de la base de datos"
      });
    });*/
};


camionCtrl.obtenerCamion = async (req, res) => {
 await Camion.find({codigo_camion:req.params.codigo_camion})
    .then(camion => {
      if (!camion) {
        return res.status(404).send({
          message: "El camion con el código: " + req.params.codigo_camion + " no existe"
        });
      }
      res.send(camion);
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

camionCtrl.actualizarCamion = async (req, res) => {
  await Camion.updateOne({codigo_camion:req.params.codigo_camion},
  {
    nombreCorto: req.body.nombreCorto,
    descripcion: req.body.descripcion,
    codigo_camion: req.body.codigo_camion,
    marca: req.body.marca,
    year: req.body.year,
    placa: req.body.placa
  },
    { new: true })
    .then(camion => {
      if (!camion) {
        return res.status(404).send({
          message: "No existe el camión con el código: " + req.params.codigo_camion
        });
      }
      res.send(camion)
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

camionCtrl.eliminarCamion = async (req, res) => {
  await Camion.deleteOne({codigo_camion:req.params.codigo_camion})
    .then(camion => {
      if (!camion) {
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

module.exports = camionCtrl;