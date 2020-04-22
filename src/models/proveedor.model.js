const { Schema, model } = require("mongoose");

const ProveedorSchema = new Schema(
  {
    codigo_proveedor: {
      type: String,
      required: true
    },
    cedula: {
      type: String,
      required: true
    },
    tipoCedula: {
      type: String,
      required: true
    },
    nombre: {
      type: String,
      required: true
    },
    nombreCorto:{
        type: String,
        required: true,
    },
    telefonos: {
      type: String,
      required: true
    },
    correo: {
      type: String,
      required: true
    },
    telefonoContacto: {
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
      collection: "proveedores"
  }
);

module.exports = model("Proveedor", ProveedorSchema);