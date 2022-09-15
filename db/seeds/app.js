const express = require("express");
const { getTopics,
        getArticleById,
        getUsers,
        patchArticleById } = require("../controllers/controllers");
        
const app = express();

app.use(express.json());

app.get("/api/topics", getTopics);

app.get("/api/article/:article_id", getArticleById);

app.get("/api/users", getUsers);

app.patch("/api/article/:article_id", patchArticleById);


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
