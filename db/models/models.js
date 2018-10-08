const product = require('../index.js');
const Sequelize = require('sequelize');

const productModel = product.define('product', {
  'product_name': {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  questions: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});


const pictureModel = product.define('product_picture', {
  'picture_url': {
    type: Sequelize.STRING
  }
});
pictureModel.belongsTo(productModel);
productModel.hasMany(pictureModel, {as: 'Pictures'});

const descriptionModel = product.define('product_description', {
  'description_text': {
    type: Sequelize.TEXT
  }
});
descriptionModel.belongsTo(productModel);
productModel.hasMany(descriptionModel, {as: 'Descriptions'});

const ratingModel = product.define('product_rating', {
  'rating': {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
});
ratingModel.belongsTo(productModel);
productModel.hasMany(ratingModel, {as: 'Ratings'});

product.sync({force: false});

module.exports = {productModel, pictureModel, descriptionModel, ratingModel};
