const { selectTopics } = require("../models/getTopics.model.js");
console.log('in the controller');
exports.getTopics = (req, res, next) => {
  selectTopics()
    .then((arrayOfTopics) => {
      res.status(200).send({ topics: arrayOfTopics });
    })
};
