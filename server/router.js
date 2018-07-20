const router = require('express').Router();
const controller = require('./controller.js');

router.route('/product')
  .get(controller.getProduct)
  .post(controller.postProduct);
  
router.route('/productDescription')
  .post(controller.postDescription);

router.route('/productPicture')
  .post(controller.postPicture);

module.exports = router;