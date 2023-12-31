const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  stock: {
    type: Boolean,
    required: true
  },
  sizes: [{
    type: String,
    enum: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL', '6UK', '6.5UK', '7UK', '7.5UK', '8UK', '9UK'],
  }],
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
