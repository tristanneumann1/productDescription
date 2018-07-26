const Sequelize = require('sequelize');
const { productModel, pictureModel, descriptionModel } = require('./models.js');
const { getPictures } = require('./pictureMethods.js');
const { getDescriptions } = require('./descriptionMethods.js');
const { getRatings } = require('./ratingMethods.js');
const NUM_OF_PRODUCTS = 9;


const postProduct = (productName, price, questions, cb) => {
  productModel.findOrCreate({
    where: {
      'product_name': productName,
      price,
      questions,
    }
  })
    .then((product)=>{ cb(null, product); })
    .catch((err)=>{ cb(err); });
};

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




  const productToFind = productName ? {
    'product_name': productName
  } : {
    id: Math.floor(1 + Math.random() * NUM_OF_PRODUCTS)
  };
  productModel.findOne({
    where: productToFind
  })
    .then((product) => {
      let { id, price, questions } = product;
      let productName = product.product_name;
      getPictures(id, (err, pictures)=>{
        if (err) { cb(err); } else {
          getDescriptions(id, (err, descriptions)=>{
            if (err) { cb(err); } else {

              getRatings(id, (err, ratings)=>{
                if (err) { cb(err); } else {
                  
                  // console.log('get products returns: ', descriptions.length)//, productName, price, rating, pictures.picture_url, descriptions);
                  const pictureUrls = pictures.map(pictureData => {
                    return pictureData.dataValues.picture_url;
                  });
                  // console.log(pictureUrls, 'URLS');
                  const descriptionTexts = descriptions.map(descriptionData => {
                    return descriptionData.dataValues.description_text;
                  });

                  const ratingNums = ratings.map(ratingData => {
                    return ratingData.dataValues.rating;
                  });

                  console.log('nums received: ', ratingNums);
                  // console.log('\npicture obj received: ', pictureUrls, descriptionTexts);
                  // console.log('product', {productName, price, rating, pictureUrls, descriptionTexts});
                  cb(null, {'product_name': productName, price, questions, pictureUrls, descriptionTexts, ratings: ratingNums});

                }  
              });                

            }
          });
        }
      });
    })
    .catch((err)=>{ cb(err); });
};

module.exports = { postProduct, getProduct };