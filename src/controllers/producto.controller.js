const productoCtrl = {};

// Models
const Producto = require("../models/producto.model");

productoCtrl.crearNuevaBodega = async (req, res) => {
  const code = Math.floor((Math.random()*10000000));
  const nuevoProducto = new Producto({
    codigo_producto: "PRO-"+code,
    descripcion: req.body.descripcion,
    puntoReorden: req.body.puntoReorden,
    unidadMedida: req.body.unidadMedida,
    codigo_materiaPrima: req.body.codigo_materiaPrima,
  });
  await nuevoProducto.save()
    .then(nuevoProducto => {
      res.json(nuevoProducto);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error al crear nuevo camión"
      });
    });
};

productoCtrl.listarProductos = async (req, res) => {
  await Producto.find()
    .then(producto => {
      res.send(producto);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error al recuperar bodegas de la base de datos"
      });
    });
};


productoCtrl.obtenerProducto = async (req, res) => {
 await Producto.find({codigo_producto: req.params.codigo_producto})
    .then(producto => {
      if (!producto) {
        return res.status(404).send({
          message: "El camion con el código: " + req.params.codigo_bodega + " no existe"
        });
      }
      res.send(producto);
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

productoCtrl.actualizarProducto = async (req, res) => {
  await Producto.findOneAndUpdate({codigo_producto: req.params.codigo_producto}, { $set: req.body }, { new: true})
    .then(producto => {
      if (!producto) {
        return res.status(404).send({
          message: "No existe el camión con el código: " +req.params.codigo_bodega
        });
      }
      res.send(producto)
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

productoCtrl.eliminarProducto = async (req, res) => {
  await Producto.deleteOne({codigo_producto: req.params.codigo_producto})
    .then(producto => {
      if (!producto) {
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

module.exports = productoCtrl;