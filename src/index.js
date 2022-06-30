const express = require("express");

const cors = require("cors");

const app = express();

const connect = require("./db");

app.use(cors());
app.use(express.json());

const MovieController = require("./Controllers/movie-app.controller");

app.use("/moviedata", MovieController);

const port = process.env.PORT || 7890;

app.listen(port, async () => {
  try {
    await connect();
    console.log("Listening to the port 7890");
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = app;