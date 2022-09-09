const { selectTopics,
        selectArticleById } = require("../models/getTopics.model.js");

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
      if (Object.keys(articleData).length === 0) {
        res.status(404).send(articleData)
      }
      else {
      res.status(200).send(articleData );
      }
    })
    .catch((err) => {
      next(err);
    });
};
