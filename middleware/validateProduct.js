// This middleware validates product data in the request body
// It checks for required fields: name, description, price, category, and inStock   

module.exports = (req, res, next) => {
  const { name, description, price, category, inStock } = req.body;

  if (!name || !description || price == null || !category || inStock == null) {
    return res.status(400).json({ message: 'Missing required product fields ' });
  }

  next();
};
