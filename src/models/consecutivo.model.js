const { Schema, model } = require("mongoose");

const ConsecutivoSchema = new Schema(
  {
    tipoConsecutivo: {
      type: String,
      required: true
    },
    descripcion: {
      type: String,
      required: true
    },
    valorConsecutivo: {
      type: String,
      required: true
    },
    Prefijo: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }, {
      collection: "consecutivos"
  }
);

module.exports = model("Consecutivos", ConsecutivoSchema);