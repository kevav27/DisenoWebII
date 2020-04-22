const { Schema, model } = require("mongoose");

const MateriaPrimaSchema = new Schema(
  {
    codigo_materiaPrima: {
      type: String,
      required: true
    },
    nombre: {
      type: String,
      required: true
    },
    cantidadExistente: {
      type: String,
      required: false
    },
    unidadDeMedida: {
      type: String,
      required: true
    },
    nombreCorto: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }, {
      collection: "materia_prima"
  }
);

module.exports = model("MateriaPrima", MateriaPrimaSchema);