const express = require("express");
require("dotenv").config();
const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");
require("express-async-errors");
const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");
// create server
const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/v1/products", productsRouter);

// notfound route
app.use(notFoundMiddleware);

// error handler
app.use(errorMiddleware);

// connect to server and db
const start = async () => {
  try {
    //   connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(3000, () => console.log("Server is listening to port 3000"));
  } catch (error) {
    console.log(error);
  }
};

start();
