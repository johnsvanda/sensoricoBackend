if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const router = require("./routes/index");
const mongoose = require("mongoose");

app.use("/", router);

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.on("open", (res) => console.log("connected to db"));

let listener = app.listen(process.env.PORT || 4000, (req) => {
  console.log("Server is running..", listener.address().port);
});
