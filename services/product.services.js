const Product = require('../models/product.model');

function findAll() {
  const result = Product.find();
  return result;
}

function findOne(product) {
  const result = Product.findOne({product:product});
  return result;
}

async function findLastInsertedProduct(){
  console.log("Find last inserted product");

  try {
    const result = await Product.find().sort({_id:-1}).limit(1);
    console.log("Success in finding last inserted product");
    return result[0]
  } catch (err){
    console.log("Problem in finding last inserted product", err);
    return false
  }
}

module.exports = { findAll, findOne, findLastInsertedProduct }