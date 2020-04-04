const { Schema, model } = require("mongoose");

const CamionSchema = new Schema(
  {
    nombreCorto: {
      type: String,
      required: true
    },
    descripcion: {
      type: String,
      required: true
    },
    codigo_camion: {
      type: String,
      required: true
    },
    marca: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    },
    placa: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Camion", CamionSchema);