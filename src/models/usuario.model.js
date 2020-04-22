const { Schema, model } = require("mongoose");

const UsuarioSchema = new Schema(
  {
    email: {
      type: String,
      required: true
    },
    user: {
      type: String,
      required: true
    },
    nombre: {
      type: String,
      required: true
    },
    rol: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    estado: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }, {
      collection: "usuarios"
  }
);

module.exports = model("Usuario", UsuarioSchema);