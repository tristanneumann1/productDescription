const { getProduct, postProduct } = require('../db/models/productMethods.js');
const { postDescription } = require('../db/models/descriptionMethods.js');
const { postPicture } = require('../db/models/pictureMethods.js');

let status;
const cb = (err, description, res, status) => {
  if(err) { res.status(400).send(err); } else {
    res.status(status).send(description);
  }
}

const controller = {
  getProduct(req, res){
    // console.log(req.query);
    let { productName } = req.query;
    status = 200;
    getProduct(productName, (err, description)=>cb(err, description, res, status));
  },
  postDescription(req, res){
    // console.log(req.body);
    let { descriptionText, productId } = req.body;
    status = 201;
    postDescription(descriptionText, productId, (err, description)=>cb(err, description, res, status));
  },
  postPicture(req, res){
    // console.log(req.body);
    let { pictureUrl, productId } = req.body;
    status = 201;
    postPicture(pictureUrl, productId, (err, description)=>cb(err, description, res, status));
  },
  postProduct(req, res){
    let { productName, price, rating } = req.body;
    status = 201;
    postProduct(productName, price, rating, (err, description)=>cb(err, description, res, status));

  },
};

module.exports = controller;