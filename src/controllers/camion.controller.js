const camionCtrl = {};

// Models
const Camion = require("../models/camion.model");


camionCtrl.renderCamionForm = async (req, res) => {
  const camiones = await Camion.find()
  res.render('camion', { camiones })
}

camionCtrl.crearNuevoCamion = async (req, res) => {
  try{
    const code = Math.floor((Math.random()*10000000));
    req.body.codigo_camion = "CAM-"+code;
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
}catch(err){
    
}
res.redirect("camion");
};

camionCtrl.listarCamiones = async (req, res) => {
  const camiones = await Camion.find()
  res.render('camion', { camiones });
};


camionCtrl.obtenerCamion = async (req, res) => {
  try{
    await Camion.find({codigo_camion:req.params.codigo_camion})
  }
catch(err){

}
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