const Sequelize = require('sequelize');
const { pictureModel } = require('./models.js');

const postPicture = (pictureUrl, productId, cb) => {
  pictureModel.findOrCreate({
    where: {
      'picture_url': pictureUrl
    },
    defaults: {
      'productId': productId
    }
  })
    .then((pic)=>{ cb(null, pic); })
    .catch((err)=>{ cb(err); });
};

const getPictures = (productId, cb) => {
  pictureModel.findAll({
    where: {
      'productId': productId
    }
  })
    .then((pics)=>{ cb(null, pics); })
    .catch((err)=>{ cb(err); });
};

module.exports = { postPicture, getPictures };