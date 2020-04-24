const { Schema, model } = require("mongoose");

const ProductoSchema = new Schema(
  {
    codigo_producto: {
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
  },
    puntoReorden: {
      type: String,
      required: true
    },
    unidadDeMedida: {
      type: String,
      required: true
    },
    codigo_materiaPrima: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }, {
      collection: "producto"
  }
);

module.exports = model("Producto", ProductoSchema);