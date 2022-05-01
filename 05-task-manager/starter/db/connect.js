const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://Biswas:Biswas@2001nodeexpressprojects.uzots.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority";

const connectDB = () => {
  return mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to DB..."))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
