//To verify DataBase connection
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;
const Mongo_Url =
  "mongodb+srv://princekumar:T5MXzvKAgiE8UY27@cluster0.zjmam7e.mongodb.net/?retryWrites=true&w=majority";

const mongoConnect = (cb) => {
  MongoClient.connect(Mongo_Url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then((client) => {
      if (client) console.log("Connected to DB");
      _db = client.db();
      cb();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) return _db;
  throw "DB not Connected";
};

module.exports = { mongoConnect, getDb };
