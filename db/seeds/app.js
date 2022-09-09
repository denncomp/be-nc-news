const express = require("express");
const { getTopics,
        getArticleById,
        getUsers } = require("../controllers/controllers");
const app = express();
app.get("/api/topics", getTopics);

app.get("/api/article/:article_id", getArticleById);

app.get("/api/users",getUsers);

//custom err
app.use((err, req, res, next) => {
  if (err.status && err.msg) {
    res.status(err.status).send(err);
  } else {
    next();
  }
});
  app.use((err, req, res, next) => {
    console.log(err, "FIX THIS NOW");
    res.status(500).send({ msg: "Internal error" });
  });

module.exports = { app };
