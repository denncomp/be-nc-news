const db = require("../connection.js");
exports.selectTopics = () => {
  let queryStr = "SELECT * FROM topics";
  return db.query(queryStr).then((results) => {
    return results.rows;
  });
};
