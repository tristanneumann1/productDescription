const faker = require('faker');	
const { postProduct } = require('./models/productMethods.js');	
const { postDescription } = require('./models/descriptionMethods.js');	
const { postPicture } = require('./models/pictureMethods.js');	
const { postRating } = require('./models/ratingMethods.js');	
// console.log(postProduct);	
// const axios = require('axios');	
// const aws = require('aws-sdk');	
// const { accessKeyId, secretAccessKey } = require('../config.js');	
const products = [];	
const descriptions = [];	
const pictures = [];	
const ratings = [];	
const ps = 10;	
for (let i = 0; i < ps; i++) {	
  products.push({	
    productName: faker.commerce.productName(),	
    price: faker.commerce.price(),	
    questions: faker.random.number({min: 0, max: 20, precision: 1}),	
  });	
}	
for (let j = 0; j < ps * 3; j++) {	
  descriptions.push({	
    productId: faker.random.number({min: 1, max: ps, precision: 1}),	
    descriptionText: faker.lorem.sentence(),	
  });	
  productId = faker.random.number({min: 1, max: ps, precision: 1});	
  pictures.push({	
    productId,	
    pictureUrl: products[productId - 1].productName.toLowerCase().split(' ')[2] + j + '.jpg'	
  });	
}	
for (let i = 0; i < ps * 10; i++) {	
  ratings.push({	
    rating: faker.random.number({min: 1, max: 5, precision: 1}),	
    productId: faker.random.number({min: 1, max: ps, precision: 1}),	
  });	
}	
productPoster = (product, i) => {	
  postProduct(product.productName, product.price, product.questions, ()=>{	
    if (i < ps - 1) {	
      productPoster(products[i], i + 1);	
    } else {	
      picturePoster(pictures[0], 0);	
      return;	
    }	
  });	
};	
picturePoster = (picture, i) => {	
  postPicture(picture.pictureUrl, picture.productId, ()=>{	
    if (i < pictures.length) {	
      picturePoster(pictures[i], i + 1);	
    } else {	
      descriptionPoster(descriptions[0], 0);	
      return;	
    }	
  });	
};	
descriptionPoster = (description, i) => {	
  postDescription(description.descriptionText, description.productId, ()=>{	
    if (i < descriptions.length) {	
      descriptionPoster(descriptions[i], i + 1);	
    } else {	
      ratingPoster(ratings[0], 0);	
      return;	
    }	
  });	
};	
ratingPoster = (rating, i) => {	
  postRating(rating.rating, rating.productId, ()=>{	
    if (i < ratings.length) {	
      ratingPoster(ratings[i], i + 1);	
    }	
  });	
};	
productPoster(products[0], 0);
