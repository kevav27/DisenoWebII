const clienteCtrl = {};

// Models
const Cliente = require("../models/cliente.model");

clienteCtrl.renderForm = async (req, res) => {
  const clientes = await Cliente.find()
  res.render("clientes", { clientes })
}

clienteCtrl.crearNuevoCliente = async (req, res) => {
  try {
    const code = Math.floor((Math.random() * 10000000));
    req.body.codigo_cliente = "CL-" + code;
    const nuevoCliente = new Cliente({
      codigo_cliente: req.body.codigo_cliente,
      nombreCorto: req.body.nombreCorto,
      fechaIngreso: req.body.fechaIngreso,
      documentoIdentidad: req.body.documentoIdentidad,
      nombre: req.body.nombre,
      telefonos: req.body.telefonos,
      correo: req.body.correo,
      direccion: req.body.direccion,
    })
    await nuevoCliente.save()
    res.redirect('/cliente/add')
  } catch (err) {
    res.render('pantallaError', { err })
  }
};

clienteCtrl.listarCliente = async (req, res) => {
  const cliente = await Cliente.find()
};


clienteCtrl.obtenerCliente = async (req, res) => {
  try {
    const cliente =  await Cliente.find({ codigo_cliente: req.params.codigo_cliente })
    res.render('clientes', {cliente})
    }
    catch (err) {
      res.render('pantallaError', { err })
    }
}

clienteCtrl.renderEdit = async (req, res) => {
  const cliente = await Cliente.find({ codigo_cliente: req.params.codigo_cliente })
  res.render('clientes-edit', {cliente})
}


clienteCtrl.actualizarCliente = async (req, res) => {
  try{
    await Cliente.updateOne({ codigo_cliente: req.params.codigo_cliente },
      { $set: req.body },
      { new: true })
      res.redirect('/cliente/add')
    }catch(err){
      res.render('pantallaError', { err })
    }
};

clienteCtrl.eliminarCliente = async (req, res) => {
  try{
    await Cliente.deleteOne({ codigo_cliente: req.params.codigo_cliente })
    res.redirect('/cliente/add')
    }catch(err){
      res.render('pantallaError', { err })
    }
};

module.exports = clienteCtrl;