const materiaPrimaCtrl = {};

// Models
const MateriaPrima = require("../models/materiaPrima.model");

materiaPrimaCtrl.renderForm = async (req, res) => {
  const materias = await MateriaPrima.find()
  res.render("materiaPrima", { materias })
}

materiaPrimaCtrl.crearNuevaMateriaPrima = async (req, res) => {
  try {
    const code = Math.floor((Math.random() * 10000000));
    req.body.codigo_materiaPrima = "MP-" + code;
    const nuevaMateriaPrima = new MateriaPrima({
      codigo_materiaPrima: req.body.codigo_materiaPrima,
      nombre: req.body.nombre,
      nombreCorto: req.body.nombreCorto,
      alias: req.body.alias,
      ubicacion: req.body.ubicacion,
      unidadDeMedida: req.body.unidadDeMedida,
    });
    await nuevaMateriaPrima.save()
    res.redirect('/materia-prima/add')
  }catch(err){
    res.render('pantallaError', {err})
  }
  };

  materiaPrimaCtrl.listarMateriaPrima = async (req, res) => {
    const materia = await MateriaPrima.find()
  };


  materiaPrimaCtrl.obtenerMateriaPrima = async (req, res) => {
    try {
      const materia =  await MateriaPrima.find({ codigo_materiaPrima: req.params.codigo_materiaPrima })
      res.render('productos', {materia})
      }
      catch (err) {
        res.render('pantallaError', { err })
      }
  }

  materiaPrimaCtrl.renderEdit = async (req, res) => {
    const materia = await MateriaPrima.find({ codigo_materiaPrima: req.params.codigo_materiaPrima })
    res.render('materiaPrima-edit', {materia})
  }
  

  materiaPrimaCtrl.actualizarMateriaPrima = async (req, res) => {
    
    try{
      await MateriaPrima.findOneAndUpdate({ codigo_materiaPrima: req.params.codigo_materiaPrima }, 
        { $set: req.body }, 
        { new: true })
        res.redirect('/materia-prima/add')
      }catch(err){
        res.render('pantallaError', { err })
      }
  };

  materiaPrimaCtrl.eliminarMateriaPrima = async (req, res) => {
    
    try{
      await MateriaPrima.deleteOne({ codigo_materiaPrima: req.params.codigo_materiaPrima })
      res.redirect('/materia-prima/add')
      }catch(err){
        res.render('pantallaError', { err })
      }
  };

  module.exports = materiaPrimaCtrl;