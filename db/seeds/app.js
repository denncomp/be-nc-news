const express = require("express");
const { getTopics } = require("../controllers/getTopics.controller");
console.log('in the app');
const app = express();

app.use(express.json()); //?

app.get("/api/topics", getTopics);

//custom err
app.use((err, req, res, next) => {
  if (err.status && err.msg) {
    res.status(err.status).send(err);
  } else {
    next();
  }

  app.use((err, req, res, next) => {
    console.log(err, "FIX THIS NOW");
    res.status(500).send({ msg: "Internal error" });
  });
});
module.exports = { app };
