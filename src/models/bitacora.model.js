const { Schema, model } = require("mongoose");

const BitacoraSchema = new Schema(
  {
    usuario: {
      type: String,
      required: true
    },
    codigoRegistro: {
      type: String,
      required: true
    },
    descripcion:{
        type:String,
        required:true
    }
  },
  {
    timestamps: true
  }, {
      collection: "eventos"
  }
);

module.exports = model("Evento", EventoSchema);