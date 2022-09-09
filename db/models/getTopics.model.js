const db = require("../connection.js");
exports.selectTopics = () => {
  let queryStr = "SELECT * FROM topics";
  return db.query(queryStr).then((results) => {
    return results.rows;
  });
};

exports.selectArticleById = (articleId) => {
  if (isNaN(articleId)) {
    return Promise.reject({ status: 400, msg: "bad request" });
  }
 
  let queryStr = "SELECT * FROM articles WHERE article_id = $1;"
  return db.query(queryStr,[articleId]).then((results) => {
    return results.rows[0];
  });
};
