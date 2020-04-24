const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

// Initializations
const app = express();

// settings
app.set('port', process.env.PORT || 5000);

// middlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(bodyParser.json());

// Global Variables

// routes
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
app.use(express.static(path.join(__dirname, '/views/tramsa')));

app.get('/', (req, res) => {
  res.sendFile('login.html', {
    root: 'src/views/tramsa/'
  });
});



module.exports = app;