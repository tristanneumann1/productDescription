const product = require('../index.js');
const Sequelize = require('sequelize');

const productModel = product.define('product', {
  productName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  rating: {
    type: Sequelize.DOUBLE,
    defaultValue: 5
  }
});


const pictureModel = product.define('product_picture', {
  pictureUrl: {
    type: Sequelize.STRING
  }
});
pictureModel.belongsTo(productModel);

const descriptionModel = product.define('product_description', {
  description: {
    type: Sequelize.TEXT
  }
});
descriptionModel.belongsTo(productModel);

product.sync({force: true});

module.exports = {productModel, pictureModel, descriptionModel};