const { selectTopics,
        selectArticleById,
        selectUsers,
        updateArticleById } = require("../models/models.js");

exports.getTopics = (req, res, next) => {
  selectTopics()
    .then((arrayOfTopics) => {
      res.status(200).send({ topics: arrayOfTopics });
    })
};

exports.getArticleById = (req, res, next) => {
 const articleId = req.params.article_id;
 selectArticleById(articleId)
    .then((articleData) => {
      res.status(200).send(articleData )
    })
    .catch((err) => {
      next(err)
    });
};

exports.getUsers = (req, res, next) => {
  selectUsers()
    .then((arrayOfUsers) => {
      res.status(200).send(arrayOfUsers )
    });
};

exports.patchArticleById = (req, res, next) => {
  const articleId = req.params.article_id;
  const articleUpdate = req.body.votes;
  updateArticleById(articleId,articleUpdate)
     .then((articleData) => {
       res.status(201).send(articleData )
     })
     .catch((err) => {
       next(err)
     });
 };
 
