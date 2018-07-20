const Sequelize = require('sequelize');
const { descriptionModel } = require('./models.js');

const postDescription = (descriptionText, productId, cb) => {
  descriptionModel.findOrCreate({
    where: {
      'description_text': descriptionText,
      'productId': productId
    }
  })
  .then((desc)=>{ cb(null, desc); })
  .catch((err)=>{ cb(err); });
}

const getDescriptions = (productId, cb) => {
  descriptionModel.findAll({
    where: {
      'productId': productId
    }
  })
  .then((descs)=>{ cb(null, descs); })
  .catch((err)=>{ cb(err); });
}

module.exports = { postDescription, getDescriptions };