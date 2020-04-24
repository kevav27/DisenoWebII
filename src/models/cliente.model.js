const { Schema, model } = require("mongoose");

const ClienteSchema = new Schema(
  {
    codigo_cliente: {
      type: String,
      required: true
    },
    nombreCorto:{
      type:String,
      required: true
    }
    ,
    fechaIngreso: {
      type: Date,
      required: true
    },
    documentoIdentidad: {
      type: String,
      required: true
    },
    nombre: {
      type: String,
      required: true
    },
    telefonos: {
      type: String,
      required: true
    },
    correo: {
      type: String,
      required: true
    },
    direccion: {
        type: String,
        required: true
    }
  },
  {
    timestamps: true
  }, {
      collection: "clientes"
  }
);

module.exports = model("Cliente", ClienteSchema);