const express = require("express");
const env = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

env.config();

mongoose
  .connect(
    `mongodb://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0-shard-00-00.kygpd.mongodb.net:27017,cluster0-shard-00-01.kygpd.mongodb.net:27017,cluster0-shard-00-02.kygpd.mongodb.net:27017/${process.env.MONGO_DB_DATABASE}?ssl=true&replicaSet=atlas-irldf1-shard-0&authSource=admin&retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("Database connected");
  });
app.use(cors());
app.use(express.static('public'));
app.use("/public",express.static(path.join(__dirname,"uploads")));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const userRoute = require('./Route/user.route');
const courseRoute = require('./Route/course.route');
const paymentRoute = require('./Route/payment.route');

const modeltestRoute = require('./Route/modeltest.route');



app.use("/api",userRoute);
app.use("/api",courseRoute);
app.use("/api",paymentRoute);
app.use("/api",modeltestRoute);

app.listen(process.env.PORT, () => {
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
    );
  });