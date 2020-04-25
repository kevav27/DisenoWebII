const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const UsuarioSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,

    },
    password: {
      type: String,
      required: true
    },
    
  },
  {
    timestamps: true
  }, {
  collection: "usuarios"
}
);
UsuarioSchema.methods.encrypPassword = async password => {
  const salt = await bycrypt.genSalt(10);
  return await bycrypt.hash(password, salt);
};

UsuarioSchema.methods.matchPassword = async function (password) {
  return await bycrypt.compare(password, this.password);
}

module.exports = model("Usuario", UsuarioSchema);