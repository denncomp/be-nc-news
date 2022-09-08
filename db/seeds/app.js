const express = require("express");
const { getTopics,
        getArticleById } = require("../controllers/getTopics.controller");
const app = express();
app.get("/api/topics", getTopics);

app.get("/api/article/:article_id", getArticleById);

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
