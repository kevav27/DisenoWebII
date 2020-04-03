const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL = "mongodb+srv://usuario_Prueba:kav270599@cluster0-hgoet.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "Tramsa";

var app = Express();

app.use(BodyParser.json()); 
app.use(BodyParser.urlencoded({ extended: true }));
var database, collection;

//Routes

app.get('/', (req, res) => {
  res.send('We are on home');
})

//Starting the server and connection with mongo DB
app.listen(5000, () => {
  MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
      throw error;
    }
    database = client.db(DATABASE_NAME);
    collection = database.collection("usuarios");
    console.log("Connected to `" + DATABASE_NAME + "`!");
  });
});

app.post("/usuarios", (request, response) => {
  collection.insert(request.body, (error, result) => {
      if(error) {
          return response.status(500).send(error);
      }
      response.send(result.result);
  });
});

