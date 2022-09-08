const { selectTopics,
        selectArticleById } = require("../models/getTopics.model.js");

exports.getTopics = (req, res, next) => {
  selectTopics()
    .then((arrayOfTopics) => {
      res.status(200).send({ topics: arrayOfTopics });
    })
};

exports.getArticleById = (req, res, next) => {
 const articleId = parseInt(req.params.article_id);
// console.log(articleId);
 selectArticleById(articleId)
    .then((articleData) => {
      res.status(200).send({ article: articleData });
    })
    .catch((err) => {
      next(err);
    });
};
