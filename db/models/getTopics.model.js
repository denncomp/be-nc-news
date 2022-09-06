const db = require("../connection.js");
console.log('in the model');
exports.selectTopics = () => {
  let queryStr = "SELECT * FROM topics";
  return db.query(queryStr).then((results) => {
    return results.rows;
  });
};
