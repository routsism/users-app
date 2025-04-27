const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let productSchema = new Schema({
  product: {
    type: String,
    required: [true, "Product is required field"],
    max: 20,
    unique: true,
    lowercase: true
  },
  cost : {
    type : Number,
  },
  description: {
    type: String, 
    required: [true, "Description is required field"],
    max: 255,
    lowercase: true
  },
  quantity : {
    type: Number
  }
}) 