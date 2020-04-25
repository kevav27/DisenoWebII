const proveedor = {};

// Models
const Proveedor = require("../models/proveedor.model");



proveedor.renderForm = async (req, res) => {
  const proveedores = await Proveedor.find();
  res.render('proveedores', { proveedores });
}

proveedor.crearNuevoProveedor = async (req, res) => {
  try {
    const code = Math.floor((Math.random() * 10000000));
    req.body.codigo_proveedor = "PROV-" + code;
    const nuevoProveedor = new Proveedor({
      codigo_proveedor: req.body.codigo_proveedor,
      cedula: req.body.cedula,
      tipoCedula: req.body.tipoCedula,
      nombre: req.body.nombre,
      nombreCorto: req.body.nombreCorto,
      telefonos: req.body.telefonos,
      correo: req.body.correo,
      telefonoContactos: req.body.telefonoContactos,
      direccion: req.body.direccion
    });
    await nuevoProveedor.save()
    res.redirect('/proveedor/add')
  } catch (err) {
    res.render('pantallaError', { err });
  }
};

proveedor.listarProveedor = async (req, res) => {
  const proveedores = await Proveedor.find()
};


proveedor.obtenerProveedor = async (req, res) => {
  try {
    const proveedor = await Proveedor.find({ codigo_proveedor: req.params.codigo_proveedor })
    res.render('proveedor', {proveedor})
  } catch (err) {
    res.render('pantallaError', { err })
  }
}


proveedor.renderEdit = async (req, res) => {
  const producto = await Producto.find({ codigo_producto: req.params.codigo_producto })
  res.render('proveedor-edit', {producto})
}

proveedor.actualizarProveedor = async (req, res) => {
  try{
  const proveedor = await Proveedor.findOneAndUpdate({ codigo_proveedor: req.params.codigo_proveedor }, 
    { $set: req.body }, 
    { new: true })
  res.redirect('proveedor/add')
  }catch(err){
    res.render('pantallaError', err)
  }
};

proveedor.eliminarProveedor = async (req, res) => {
  try{
    await Proveedor.deleteOne({ codigo_proveedor: req.params.codigo_proveedor })
    res.redirect('/producto/add')
    }catch(err){
      res.render('pantallaError', { err })
    }
};

module.exports = proveedor;