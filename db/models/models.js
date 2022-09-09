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
    if (Object.keys(results.rows[0]).length === 0) {
      return Promise.reject({status: 404, msg: "Record not found"})
    }
    return results.rows[0];
  });
};
exports.selectUsers = () => {
  let queryStr = "SELECT * FROM users";
  return db.query(queryStr).then((results) => {
    return results.rows;
  });
};
