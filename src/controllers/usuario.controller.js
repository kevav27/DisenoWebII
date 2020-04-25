const usuarioCtrl = {};
const passport = require('passport')
// Models
const Usuario = require("../models/usuario.model");

usuarioCtrl.renderSignupForm = (req, res) => {
  res.render('users/registro');
}

usuarioCtrl.registro = async (req, res) => {
  const errors = [];
  const { user, email, password } = req.body;
  


  if(user.length < 5){
    errors.push({text:'El usuario tiene que ser mayor a 5 caracteres'});
  }
  if(password.length < 4){
    errors.push({text:'La contraseña tiene que ser mayor a 4 caracteres'});
  }
  if(errors.length > 0){
    res.render('users/registro', {
      errors ,user, email, password
    })
  }else {
    const emailUser = await Usuario.findOne({email: email});
    if (emailUser){
        req.flash('error_msg', 'El correo ya esta en uso');
        res.redirect('/users/registro');
      }else{
        const newUser = new Usuario({user, email, password});
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        req.flash('success_msg', 'Esta Registrado');

        res.redirect('/users/login');
      }
    }
};

usuarioCtrl.renderLoginForm =(req,res) => {
  res.render('users/login');
}

usuarioCtrl.login = passport.authenticate('local', {
  failureRedirect: '/users/login', 
  successRedirect:'/notes',
  failureRedirect: true
});
usuarioCtrl.logout = (req, res) => {
  res.send('logout')
}

usuarioCtrl.renderPassword =(req,res) => {
  res.render('users/password');
}
usuarioCtrl.password = (req,res) => {
  res.send('password')
}

module.exports = usuarioCtrl;