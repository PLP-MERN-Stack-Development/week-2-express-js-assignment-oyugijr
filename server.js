// server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const productsRoutes = require('./routes/products');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const validateProduct = require('./middleware/validateProduct');

const app = express();
const PORT = process.env.PORT || 3000;

// Built-in & custom middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);

// Routes
app.use('/api/products', productsRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Hello World and Welcome to the Product API!. \n' +
    'I am Oyugi, a student at PLP, and this is my Express.js assignment.');
});

// Error handler (must be last)
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
