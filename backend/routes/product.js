const express = require('express');
const router = express.Router();

const { 
    getProducts, 
    newProduct, 
    getSingleProduct, 
    updateProducts,
    deleteProduct,
    createProductReview,
    getProductReview,
    deleteReview
 } = require('../controllers/productController')

const { isAuthenticatedUser, authorizedRoles } = require('../middlewares/auth');

router.route('/product').get(isAuthenticatedUser, getProducts);
router.route('/product/:id').get(getSingleProduct);

router.route('/admin/product/new').post(isAuthenticatedUser, authorizedRoles('admin'), newProduct);

router.route('/admin/product/:id').put(isAuthenticatedUser, authorizedRoles('admin'), updateProducts);

router.route('/admin/product/:id').delete(isAuthenticatedUser, authorizedRoles('admin'), deleteProduct);

router.route('/review').put(isAuthenticatedUser, createProductReview)

router.route('/reviews').get(isAuthenticatedUser, getProductReview)
router.route('/reviews').delete(isAuthenticatedUser, deleteReview)

module.exports = router; 