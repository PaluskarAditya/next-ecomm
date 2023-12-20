const Product = require('../models/productModel')

// @GET -> get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (!products) {
      res.status(404).json({ err: "no products found" })
    } else {
      res.status(200).json(products);
    }
  } catch (error) {
    console.log(error.message);
  }
};

// @GET -> get product by id
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      res.status(404).json({ err: "no product found" })
    } else {
      res.status(200).json(product);
    }
  } catch (error) {
    console.log(error.message);
  }
};

// @GET -> get unique products acc to limit 
const getUniqueProducts = async (req, res) => {
  try {
    let { limit } = parseInt(req.params);
    if (isNaN(limit) || limit <= 0) {
      return res.status(400).json({ error: 'Invalid limit parameter' });
    }
    const uniqueCategories = await Product.distinct('category').exec();
    const uniqueProducts = await Promise.all(
      uniqueCategories.slice(0, limit).map(async (category) => {
        return await Product.findOne({ category }).exec();
      })
    );
    res.json(uniqueProducts);
  } catch (error) {
    console.error('Error fetching unique products:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// @GET -> get products acc to category and send limited if limit given
const getProductByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    let { limit } = parseInt(req.params);
    if (!category) {
      return res.status(400).json({ error: 'Category parameter is required' });
    }
    if (isNaN(limit) || limit <= 0) {
      limit = 10;
    }
    const products = await Product.find({ category }).limit(limit).exec();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products by category:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getProducts,
  getProductById,
  getUniqueProducts,
  getProductByCategory,
};