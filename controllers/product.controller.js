const Product = require('../models/product.model');
const productService = require('../services/product.services');


const logger = require('../logger/logger');

exports.findAll = async(req, res) => {
  console.log("Find all products from collection products");

  try {
    // const result = await Product.find();
    const result = await productService.findAll();
    res.status(200).json({status: true, data: result});
    logger.info("Success in reading all products");
    logger.warn("Success in reading all products");
    logger.error("Message with error");
  } catch (err) {
    console.log("Problem in reading products", err);
    logger.error("Problem in reading all products", err);
    res.status(400).json({status:false, data: err});
  }
}

exports.findOne = async(req, res) => {
  console.log("Find product with specific product");
  let product = req.params.product;

  try {
    // const result = await Product.findOne({product:product});
    const result = await productService.findOne(product);
    if (result) {
      res.status(200).json({status:true, data: result});
    } else {
      res.status(404).json({status: false, data: "Product not exist"})
    }
  } catch (err) {
    console.log("Problem in findng product", err)
    res.status(400).json({status: false, data: err});
  }
}

exports.create = async(req, res) => {
  console.log("Create Product");
  let data = req.body;


  const newProduct = new Product({
    product: data.product,
    cost: data.cost,
    description: data.description,
    quantity: data.quantity
    })

    try{
      const result = await newProduct.save();
      res.status(200).json({status: true, data: result});
    } catch (err) {
      console.log("Problem in creating product", err);
      res.status(400).json({status: false, data: err});
    }
  }

  exports.update = async(req, res) => {
    const product = req.body.product;
  
    console.log("Update product with product", product);
  
    const updateProduct = {
      product: req.body.product,
      cost: req.body.cost,
      description: req.body.description,
      quantity: req.body.quantity
    };
  
    try {
      const result = await Product.findOneAndUpdate({product:product}, updateProduct, {new:true});
      res.status(200).json({status:true, data:result});
    } catch (err) {
      console.log("Problem in updating product", err);
      res.status(400).json({status:false, data: err});
    }
  }

  exports.deleteByProduct = async(req, res) => {
      const product = req.params.product
      console.log("Delete product with product", product);
  
      try {
        const result = await Product.findOneAndDelete({product:product});
        res.status(200).json({status:true, data: result});
      } catch (err) {
        console.log("Problem in deleting product", err);
        res.status(400).json({status: false, data: err});
      }
  }


  exports.deleteByDescription = async(req, res) => {
    const product = req.params.product
    const description = req.params.description
    console.log("Delete product by description", description);
  
    try {
      const result = await Product.findOneAndDelete({description:description});
      res.status(200).json({status:true, data: result});
    } catch (err) {
      console.log("Problem in deleting by description", err);
      res.status(400).json({status: false, data: err});
    }
  } 
