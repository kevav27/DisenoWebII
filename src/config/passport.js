const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const Usuario = require('../models/usuario.model')


passport.use(new LocalStrategy({
    usernameField: 'user',
    passportField: 'password'
},
    async (user, password, done) => {

        //match user 
        const username = await Usuario.findOne({ user })
        if (!username) {
            return done(null, false, { message: 'Not User Found' });
        } else {
            ///match password

            const match = await Usuario.matchPassword(password);
            if (match) {
                return done(null, username)
            } else {
                return done(null, false, { message: 'Contraseña Incorrecta' });
            }
        }

    }));

    passport.serializeUser((user,done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id,done) => {
        User.findById (id, (err ,user) => {
            done(err,user);
        })
    });