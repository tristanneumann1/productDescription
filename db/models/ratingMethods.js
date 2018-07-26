const Sequelize = require('sequelize');
const { ratingModel } = require('./models.js');

const postRating = (rating, productId, cb) => {
  ratingModel.create({
    rating,
    'productId': productId,
  })
    .then((pic)=>{ cb(null, pic); })
    .catch((err)=>{ cb(err); });
};

const getRatings = (productId, cb) => {
  ratingModel.findAll({
    where: {
      'productId': productId
    }
  })
    .then((pics)=>{ cb(null, pics); })
    .catch((err)=>{ cb(err); });
};

module.exports = { postRating, getRatings };