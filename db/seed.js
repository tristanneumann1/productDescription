const faker = require('faker');
const { postProduct } = require('./models/productMethods.js');
const { postDescription } = require('./models/descriptionMethods.js');
const { postPicture } = require('./models/pictureMethods.js');
// const axios = require('axios');
// const aws = require('aws-sdk');
// const { accessKeyId, secretAccessKey } = require('../config.js');

const products = [];
const descriptions = [];
const pictures = [];

const ps = 50;
for(let i = 0; i < ps; i++) {
  products.push({
    productName: faker.commerce.productName(),
    price: faker.commerce.price(),
    rating: faker.random.number({min: 1.0, max: 5.0, precision:0.1}),
  });
}

for(let j = 0; j < ps * 3; j++) {
  descriptions.push({
    productId: faker.random.number({min: 1, max: ps, precision:1}),
    descriptionText: faker.lorem.sentence(),
  });
  // let pictureLorem =
  productId = faker.random.number({min: 1, max: ps, precision:1})
  pictures.push({
    productId,
    pictureUrl: products[productId - 1].productName.toLowerCase().split(' ')[2] + j + '.jpg'
  });
}

productPoster = (product, i) => {
  postProduct(product.productName, product.price, product.rating, ()=>{
    if(i < ps - 1) {
      productPoster(products[i], i + 1);
    } else{
      picturePoster(pictures[0], 0);
      return;
    }
  })
}

picturePoster = (picture, i) => {
  postPicture(picture.pictureUrl, picture.productId, ()=>{
    if(i < ps * 3 - 1) {
      picturePoster(pictures[i], i + 1);
    } else {
      descriptionPoster(descriptions[0], 0);
      return;
    }
  })
}

descriptionPoster = (description, i) => {
  postDescription(description.descriptionText, description.productId, ()=>{
    if(i < ps * 3 - 1) {
      descriptionPoster(descriptions[i], i + 1);
    }
  })
}
productPoster(products[0], 0);


module.exports = faker.commerce.productName();


//console.log(pictures);

// aws.config.update({
//   region: 'us-west-1',
//   accessKeyId,
//   secretAccessKey,
// });

// const sign = function(filename, filetype, pic) {
//   var s3 = new aws.S3();
//   var params = {
//     Bucket: 'mormont',
//     Key: filename,
//     Expires: 60,
//     ContentType: filetype,
//   };
//   s3.getSignedUrl('putObject', params, (err, signedUrl) => {
//     if(err){ console.error(err); } else {
      
//       var options = {
//         headers: {
//           'Content-Type': filetype,
//         }
//       };
//       axios.put(signedUrl, pic, options)
//       .then((result)=>{console.log('success putting data', result)})
//       .catch((err)=>{console.log('err posting pic', err)});
//     }
//   });
// }

// sign('dog', 'image/jpeg')

// axios.get('https://loremflickr.com/320/240')
// .then((pic)=>{
//   sign('cat3.jpg', pic.headers['content-type'], pic.data);
// });
