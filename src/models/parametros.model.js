const { Schema, model } = require("mongoose");

const ParametroSchema = new Schema(
  {
    nombreCompania: {
      type: String,
      required: true
    },
    telefono: {
      type: String,
      required: true
    },
    cedulaJuridica: {
      type: String,
      required: true
    },
    mensajeSaludo: {
      type: String,
      required: true
    },
    direccionEstbalecimiento: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }, {
      collection: "parametros"
  }
);

module.exports = model("Parametros", ParametroSchema);