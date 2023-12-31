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
    const limit = parseInt(req.params.limit);
    const uniqueProducts = await Product.aggregate([
      { $sample: { size: limit } },
      { $group: { _id: '$_id', data: { $first: '$$ROOT' } } },
      { $replaceRoot: { newRoot: '$data' } },
    ]);
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

const addProduct = async (req, res) => {
  try {
    const { name, description, price, sizes, category, image, stock, rating } = req.body;
    const product = await Product({
      name,
      description,
      image,
      category,
      price,
      stock,
      rating,
      sizes
    });
    
    if (product) {
      product.save();
      res.status(200).json(product);
    } else {
      res.status(500).json({err: "Failed to create, Internal server error"});
    }
  } catch (error) {
    console.log('Product creation error:', error.message);
    res.status(500).json({err: "Internal Server Error"});
  }
}

module.exports = {
  getProducts,
  getProductById,
  getUniqueProducts,
  getProductByCategory,
  addProduct,
};