const { selectTopics } = require("../models/getTopics.model.js");
console.log('in the controller');
exports.getTopics = (req, res, next) => {
//  const query = req.query;
  //console.log(query.sort_by, query);
  selectTopics()
    .then((arrayOfTopics) => {
      res.status(200).send({ topics: arrayOfTopics });
    })
    .catch((err) => {
      next(err);
    });
};
