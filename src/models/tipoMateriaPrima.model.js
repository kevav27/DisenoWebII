const { Schema, model } = require("mongoose");

const TipoMateriaPrimaSchema = new Schema(
  {
    codigo_tipoMateriaPrima: {
      type: String,
      required: true
    },
    descripcion: {
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
      collection: "tipo_materia_prima"
  }
);

module.exports = model("TipoMateriaPrima", TipoMateriaPrimaSchema);