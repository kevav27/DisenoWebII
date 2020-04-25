const camionCtrl = {};

// Models
const Camion = require("../models/camion.model");


camionCtrl.renderCamionForm = async (req, res) => {
  const camiones = await Camion.find()
  res.render("camion-new", { camiones })
}

camionCtrl.crearNuevoCamion = async (req, res) => {
  try {
    const code = Math.floor((Math.random() * 10000000));
    req.body.codigo_camion = "CAM-" + code;
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
    res.redirect('/camion/add')
  } catch (err) {
    res.render('pantallaError', { err })
  }
};

camionCtrl.listarCamiones = async (req, res) => {
  const camiones = await Camion.find()
};


camionCtrl.obtenerCamion = async (req, res) => {
  try {
  const camiones =  await Camion.find({ codigo_camion: req.params.codigo_camion })
  res.render('camion-new', {camiones})
  }
  catch (err) {
    res.render('pantallaError', { err })
  }
}


camionCtrl.renderActualizarCamionForm = async (req, res) => {
    const camion = await Camion.find({ codigo_camion: req.params.codigo_camion })
    res.render('camion-edit', {camion})
}

camionCtrl.actualizarCamion = async (req, res) => {
  try{
  await Camion.updateOne({ codigo_camion: req.params.codigo_camion },
    { $set: req.body },
    { new: true })
    res.redirect('/camion/add')
  }catch(err){
    res.render('pantallaError', { err })
  }
};

camionCtrl.eliminarCamion = async (req, res) => {
  try{
  await Camion.deleteOne({ codigo_camion: req.params.codigo_camion })
  res.redirect('/camion/add')
  }catch(err){
    res.render('pantallaError', { err })
  }
};

module.exports = camionCtrl;