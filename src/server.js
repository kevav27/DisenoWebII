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
//Al ser una API de consumo, no se necesitan pantallas. Una simple ruta que defina un mensaje básico es suficiente.
app.get('/', (req, res) => {
  res.send("API for Tramsa Ready");
});

// static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;