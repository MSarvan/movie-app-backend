const express = require("express");

const cors = require("cors");

const app = express();

const connect = require("./db");

app.use(cors());
app.use(express.json());

const Movie_controller = require("./Controllers/movie-app.controller");

app.use("/movie", Movie_controller);

const port = process.env.PORT || 7890;

app.listen(port, async () => {
  try {
    await connect();
    console.log("Listening to the port 7890");
  } catch(err) {
    console.log(err.message);
  }
});

module.exports = app;