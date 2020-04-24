const eventoCtrl = {};

// Models
const Evento = require("../models/eventos.model");


eventoCtrl.crearNuevoRol = async (req, res) => {
  const code = Math.floor((Math.random()*10000000));
  const nuevoEvento = new Evento({
    codigo_evento: "EV"+code,
    descripcion: req.body.descripcion,
    nombreCorto: req.body.nombreCorto,
  });
  await nuevoEvento.save()
    .then(nuevoEvento => {
      res.json(nuevoEvento);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error al crear nuevo camión"
      });
    });
};

eventoCtrl.listarEvento= async (req, res) => {
  await Evento.find()
    .then(evento => {
      res.json(evento);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error al recuperar los camiones de la base de datos"
      });
    });
};


eventoCtrl.obtenerRol = async (req, res) => {
 await Evento.find({codigo_evento:req.params.codigo_evento})
    .then(evento => {
      if (!evento) {
        return res.status(404).send({
          message: "El camion con el código: " + req.params.codigo_camion + " no existe"
        });
      }
      res.send(evento);
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

eventoCtrl.actualizarEvento = async (req, res) => {
  await Evento.findOneAndUpdate({codigo_evento:req.params.codigo_evento}, { $set: req.body }, { new: true})
    .then(evento => {
      if (!evento) {
        return res.status(404).send({
          message: "No existe el camión con el código: " + req.params.codigo_camion
        });
      }
      res.send(evento)
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

eventoCtrl.eliminarRol = async (req, res) => {
  await Evento.deleteOne({codigo_evento:req.params.codigo_evento})
    .then(evento => {
      if (!evento) {
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

module.exports = eventoCtrl;