const mongoose = require('mongoose');
const mongodb_url = "mongodb+srv://usuario_Prueba:kav270599@cluster0-hgoet.mongodb.net/test?retryWrites=true&w=majority";
//Este url permite conectarse al atlas, a nuestro cluster anteriormente creado en la NUBE e interactuar con él y nuestra base de datos
//previamente creada Tramsa

mongoose.Promise = global.Promise;

mongoose.connect(mongodb_url, {
    dbName: "Tramsa",
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
}).then(db => console.log('Database is connected'))
  .catch(err=>{
      console.log('Error message: ',err);
  })