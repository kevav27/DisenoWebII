const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

const methodOverride = require('method-override');
const bodyParser = require('body-parser');

// Initializations
const app = express();
require ('./config/passport');

// settings
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout:'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}));

app.set('view engine', '.hbs');

// middlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(session({
  secret : 'secret',
  resave: true,
  saveUnitializaed: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());




// Global Variables
app.use((req,res,next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();

});

// routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/camion.routes'));
app.use(require('./routes/bodega.routes'));
app.use(require('./routes/bitacora.routes'));
app.use(require('./routes/cliente.routes'));
app.use(require('./routes/eventos.routes'));
app.use(require('./routes/materiaPrima.routes'));
app.use(require('./routes/parametro.routes'));
app.use(require('./routes/producto.routes'));
app.use(require('./routes/proveedor.routes'));
app.use(require('./routes/rol.routes'));
app.use(require('./routes/tipoMateriaPrima.routes'));

app.use(require('./routes/usuario.routes'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, '/views/tramsa')));

app.get('/', (req, res) => {
  res.sendFile('login.html', {
    root: 'src/views/tramsa/'
  });
});



module.exports = app;