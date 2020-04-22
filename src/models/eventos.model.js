const { Schema, model } = require("mongoose");

const EventoSchema = new Schema(
  {
    codigo_evento: {
      type: String,
      required: true
    },
    descripcion: {
      type: String,
      required: true
    },
    nombreCorto:{
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