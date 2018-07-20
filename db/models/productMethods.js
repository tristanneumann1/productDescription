const Sequelize = require('sequelize');
const { productModel, pictureModel, descriptionModel } = require('./models.js');
const { getPictures } = require('./pictureMethods.js');
const { getDescriptions } = require('./descriptionMethods.js');

const postProduct = (productName, price, rating, cb) => {
  productModel.findOrCreate({
    where: {
      'product_name': productName,
      price,
      rating,
    }
  })
  .then((product)=>{ cb(null, product); })
  .catch((err)=>{ cb(err); });
}

const getProduct = (productName, cb) => {
  // productModel.getDescriptions(1, (val)=>{console.log('VAL', val)})
  // productModel.findOne({
  //   where: {
  //     product_name: productName
  //   },
  //   // include: [{
  //   //   model: 'Pictures',
  //   //   as: 'p'
  //   // }],
  //   attributes: [
  //     'id',
  //     'product_name',
  //     'price',
  //     'rating',
  //   ],
  // })
  // .then((product)=>{ 
  //   // console.log('PRODUCT: ', product);
  //   cb(null, product); })
  // .catch((err)=>{
  //   // console.log('in product catch', err);
  //   cb(err); })





  productModel.findOne({
    where: {
      product_name: productName
    }
  })
  .then((product) => {
    let { id, price, rating } = product;
    getPictures(id, (err, pictures)=>{
      if(err) { cb(err) } else {
        getDescriptions(id, (err, descriptions)=>{
          if(err) { cb(err) } else {
            // console.log('get products returns: ', descriptions.length)//, productName, price, rating, pictures.picture_url, descriptions);
            const pictureUrls = pictures.map(pictureData => {
              return pictureData.dataValues.picture_url;
            });
            // console.log(pictureUrls, 'URLS');
            const descriptionTexts = descriptions.map(descriptionData => {
              return descriptionData.dataValues.description_text;
            });
            // console.log('\npicture obj received: ', pictureUrls, descriptionTexts);
            // console.log('product', {productName, price, rating, pictureUrls, descriptionTexts});
            cb(null, {productName, price, rating, pictureUrls, descriptionTexts});
          }
        })
      }
    })
  })
  .catch((err)=>{ cb(err) });
}

module.exports = { postProduct, getProduct };