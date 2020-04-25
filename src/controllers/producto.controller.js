const productoCtrl = {};

// Models
const Producto = require("../models/producto.model");

productoCtrl.renderForm = async (req, res) => {
  const productos = await Producto.find()
  res.render("productos", { productos })
}

productoCtrl.crearNuevoProducto = async (req, res) => {
  try {
    const code = Math.floor((Math.random() * 10000000));
    req.body.codigo_producto = "CL-" + code;
    req.body.codigo_materiaPrima = "MP-"+code;
    const nuevoProducto = new Producto({
      codigo_producto: req.body.codigo_producto,
      descripcion: req.body.descripcion,
      nombreCorto: req.body.nombreCorto,
      puntoReorden: req.body.puntoReorden,
      unidadDeMedida: req.body.unidadDeMedida,
      codigo_materiaPrima: req.body.codigo_materiaPrima,
    });
    await nuevoProducto.save()
    res.redirect('/producto/add')
  } catch(err){
    res.render('pantallaError', { err })
  }
};

productoCtrl.listarProducto = async (req, res) => {
  const producto = await Producto.find()
};


productoCtrl.obtenerProducto = async (req, res) => {
  try {
    const producto =  await Producto.find({ codigo_producto: req.params.codigo_producto })
    res.render('productos', {producto})
    }
    catch (err) {
      res.render('pantallaError', { err })
    }
}

productoCtrl.renderEdit = async (req, res) => {
  const producto = await Producto.find({ codigo_producto: req.params.codigo_producto })
  res.render('productos-edit', {producto})
}

productoCtrl.actualizarProducto = async (req, res) => {
  try{
    await Producto.findOneAndUpdate({ codigo_producto: req.params.codigo_producto }, 
      { $set: req.body },
      { new: true })
      res.redirect('/producto/add')
    }catch(err){
      res.render('pantallaError', { err })
    }
};

productoCtrl.eliminarProducto = async (req, res) => {
  try{
    await Producto.deleteOne({ codigo_producto: req.params.codigo_producto })
    res.redirect('/producto/add')
    }catch(err){
      res.render('pantallaError', { err })
    }
};

module.exports = productoCtrl;