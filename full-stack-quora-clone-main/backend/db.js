const mongoose = require("mongoose");

const url =
  "mongodb://VivekJuremalani:usq4CJ7wOMvlEY6O@ac-j9eaoev-shard-00-00.0yquygm.mongodb.net:27017,ac-j9eaoev-shard-00-01.0yquygm.mongodb.net:27017,ac-j9eaoev-shard-00-02.0yquygm.mongodb.net:27017/forumdb?ssl=true&replicaSet=atlas-kg3gza-shard-0&authSource=admin&retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
