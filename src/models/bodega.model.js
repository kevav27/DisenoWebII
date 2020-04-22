const { Schema, model } = require("mongoose");

const BodegaSchema = new Schema(
  {
    codigo_bodega: {
      type: String,
      required: true
    },
    nombre: {
      type: String,
      required: true
    },
    nombreCorto: {
      type: String,
      required: true
    },
    alias: {
      type: String,
      required: true
    },
    ubicacion: {
      type: String,
      required: true
    },
    unidadMedida: {
      type: String,
      required: true
    },
    tipoBodega:{
      type:String,
      required:true
    },
    espacioBodega:{
      type:String,
      required: no
    }
  },
  {
    timestamps: true
  }, {
      collection: "bodegas"
  }
);

module.exports = model("Bodega", BodegaSchema);