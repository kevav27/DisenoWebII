const { Schema, model } = require("mongoose");

const RolSchema = new Schema(
  {
    codigo_rol: {
      type: String,
      required: true
    },
    nombreRol: {
      type: String,
      required: true
    },
    rolesDisponibles:{
      type:String,
      required: false
    },
    rolesAsignados:{
      type:String,
      required: false
    },
    nombreCorto:{
        type:String,
        required:true
    }
  },
  {
    timestamps: true
  }, {
      collection: "roles"
  }
);

module.exports = model("Rol", RolSchema);