const Sequelize = require('sequelize');
const { pictureModel } = require('./models.js');

const postPicture = (pictureUrl, productId, cb) => {
  pictureModel.findOrCreate({
    where: {
      pictureUrl
    },
    defaults: {
      productId
    }
  })
  .then((pic)=>{ cb(pic); })
  .catch((err)=>{ cb(err); });
}

const getPictures = (productId, cb) => {
  pictureModel.findAll({
    where: {
      productId
    }
  })
  .then((pics)=>{ cb(pics); })
  .catch((err)=>{ cb(err); });
}

module.exports = { postPicture, getPictures };